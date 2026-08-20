"use client";

import { Play } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";
import { formationOffer } from "@/lib/formation-offer";
import { trackVslEvent } from "./FormationTracking";

type PlayerStateEvent = { data: number };
type YouTubePlayer = {
  destroy(): void;
  getCurrentTime(): number;
  getDuration(): number;
  getIframe(): HTMLIFrameElement;
  mute(): void;
  pauseVideo(): void;
  playVideo(): void;
  unMute(): void;
};
type YouTubeNamespace = {
  Player: new (
    element: HTMLElement,
    options: {
      videoId: string;
      playerVars: Record<string, number | string>;
      events: {
        onReady(event: { target: YouTubePlayer }): void;
        onStateChange(event: PlayerStateEvent): void;
        onAutoplayBlocked(): void;
        onError(): void;
      };
    },
  ) => YouTubePlayer;
  PlayerState: { PLAYING: number; PAUSED: number; ENDED: number };
};

declare global {
  interface Window {
    YT?: YouTubeNamespace;
    onYouTubeIframeAPIReady?: () => void;
  }
}

let youtubeApiPromise: Promise<YouTubeNamespace> | null = null;

function loadYouTubeApi(): Promise<YouTubeNamespace> {
  if (window.YT?.Player) return Promise.resolve(window.YT);
  if (youtubeApiPromise) return youtubeApiPromise;

  youtubeApiPromise = new Promise((resolve, reject) => {
    const previousCallback = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      previousCallback?.();
      if (window.YT?.Player) resolve(window.YT);
      else reject(new Error("YouTube IFrame API indisponible"));
    };

    const existingScript = document.querySelector<HTMLScriptElement>(
      'script[src="https://www.youtube.com/iframe_api"]',
    );
    if (existingScript) return;

    const script = document.createElement("script");
    script.src = "https://www.youtube.com/iframe_api";
    script.async = true;
    script.onerror = () => {
      youtubeApiPromise = null;
      reject(new Error("Échec du chargement de l’API YouTube"));
    };
    document.head.appendChild(script);
  });

  return youtubeApiPromise;
}

const videoTitle = "Présentation de la formation Créer des sites avec l’IA — FC Group";

export function VslPlayer() {
  const reactId = useId();
  const playerHostId = `formation-vsl-${reactId.replace(/:/g, "")}`;
  const containerRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<YouTubePlayer | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const progressTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const isVisibleRef = useRef(false);
  const pendingUserPlayRef = useRef(false);
  const soundActivatedRef = useRef(false);
  const startedRef = useRef(false);
  const milestonesRef = useRef(new Set<number>());
  const [playerReady, setPlayerReady] = useState(false);
  const [soundButtonVisible, setSoundButtonVisible] = useState(true);

  useEffect(() => {
    let cancelled = false;

    const stopProgressTimer = () => {
      if (progressTimerRef.current) clearInterval(progressTimerRef.current);
      progressTimerRef.current = null;
    };

    const checkProgress = () => {
      const player = playerRef.current;
      if (!player) return;
      const duration = player.getDuration();
      if (!duration) return;
      const percent = (player.getCurrentTime() / duration) * 100;
      ([25, 50, 75, 100] as const).forEach((milestone) => {
        if (percent >= milestone && !milestonesRef.current.has(milestone)) {
          milestonesRef.current.add(milestone);
          trackVslEvent(milestone === 100 ? "VSLComplete" : `VSL${milestone}`);
        }
      });
    };

    void loadYouTubeApi()
      .then((YT) => {
        if (cancelled) return;
        const host = document.getElementById(playerHostId);
        if (!host) return;

        playerRef.current = new YT.Player(host, {
          videoId: formationOffer.vsl.videoId,
          playerVars: {
            autoplay: 0,
            controls: 1,
            disablekb: 0,
            enablejsapi: 1,
            fs: 1,
            hl: "fr",
            playsinline: 1,
            rel: 0,
            origin: window.location.origin,
          },
          events: {
            onReady: ({ target }) => {
              if (cancelled) return;
              playerRef.current = target;
              const iframe = target.getIframe();
              iframe.title = videoTitle;
              iframe.style.position = "absolute";
              iframe.style.inset = "0";
              iframe.style.zIndex = "0";
              iframe.setAttribute("allow", "autoplay; encrypted-media; picture-in-picture; fullscreen");
              iframe.setAttribute("allowfullscreen", "");
              setPlayerReady(true);

              if (pendingUserPlayRef.current) {
                target.unMute();
                target.playVideo();
              } else {
                target.mute();
              }

              observerRef.current = new IntersectionObserver(
                ([entry]) => {
                  const visible = entry.isIntersecting && entry.intersectionRatio >= 0.45;
                  isVisibleRef.current = visible;
                  if (visible) {
                    if (!soundActivatedRef.current) target.mute();
                    target.playVideo();
                  } else {
                    target.pauseVideo();
                  }
                },
                { threshold: [0, 0.45, 0.75] },
              );
              if (containerRef.current) observerRef.current.observe(containerRef.current);
            },
            onStateChange: ({ data }) => {
              if (data === YT.PlayerState.PLAYING) {
                if (!startedRef.current) {
                  startedRef.current = true;
                  trackVslEvent("VSLStart");
                }
                stopProgressTimer();
                progressTimerRef.current = setInterval(checkProgress, 750);
              } else {
                if (data === YT.PlayerState.ENDED && !milestonesRef.current.has(100)) {
                  milestonesRef.current.add(100);
                  trackVslEvent("VSLComplete");
                }
                checkProgress();
                stopProgressTimer();
              }
            },
            onAutoplayBlocked: () => {},
            onError: () => {},
          },
        });
      })
      .catch(() => {});

    return () => {
      cancelled = true;
      observerRef.current?.disconnect();
      observerRef.current = null;
      stopProgressTimer();
      playerRef.current?.destroy();
      playerRef.current = null;
    };
  }, [playerHostId]);

  function activateSound() {
    soundActivatedRef.current = true;
    pendingUserPlayRef.current = true;
    setSoundButtonVisible(false);

    const player = playerRef.current;
    if (!player) return;
    player.unMute();
    player.playVideo();
  }

  return (
    <div
      ref={containerRef}
      className="gold-border relative isolate aspect-video overflow-hidden rounded-2xl bg-[var(--navy-elevated)] shadow-2xl shadow-black/30"
      aria-label={videoTitle}
    >
      <div id={playerHostId} className="absolute inset-0 h-full w-full" />

      {!playerReady ? (
        <div
          className="pointer-events-none absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `linear-gradient(rgba(10,22,40,.38),rgba(10,22,40,.65)),url(${formationOffer.vsl.poster})` }}
          aria-hidden="true"
        >
          <span className="absolute inset-0 animate-pulse bg-[rgba(201,167,107,.06)] motion-reduce:animate-none" />
        </div>
      ) : null}

      {soundButtonVisible ? (
        <div className="pointer-events-none absolute inset-0 z-10 grid place-items-center p-5">
          <button type="button" onClick={activateSound} className="focus-ring pointer-events-auto flex min-h-14 items-center justify-center gap-3 rounded-full bg-[var(--or)] px-6 py-3 text-base font-bold text-[var(--navy)] shadow-[0_12px_36px_rgba(0,0,0,.45)] transition hover:bg-[var(--or-bright)] sm:min-h-16 sm:px-8 sm:text-lg" aria-label="Activer le son de la vidéo">
            <Play className="shrink-0" fill="currentColor" aria-hidden="true" />
            Activer le son
          </button>
        </div>
      ) : null}

    </div>
  );
}
