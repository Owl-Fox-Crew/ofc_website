// src/components/common/VideoReel.tsx
export function VideoReel({ src, poster }) {
  return (
    <video
      autoPlay
      muted
      loop
      playsInline
      className="w-full h-auto rounded-xl shadow-lg"
      poster={poster}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
