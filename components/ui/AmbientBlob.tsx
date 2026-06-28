export function AmbientBlob({ className = "" }: { className?: string }) {
  return <div className={`ambient-blob absolute ${className}`} aria-hidden="true" />;
}
