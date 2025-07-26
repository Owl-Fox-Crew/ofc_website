// src/components/common/VideoReel.tsx

type VideoReelProps = {
  src: string;
  poster: string;
};

export function VideoReel({ src, poster }: VideoReelProps) {
  return (
    <video
      autoPlay
      muted
      playsInline
      loop
      poster={poster}
      className="w-full h-full object-cover rounded-2xl shadow-lg"
    >
      <source src={src} type="video/mp4" />
      Tu navegador no admite la reproducción de videos.
    </video>
  );
}
