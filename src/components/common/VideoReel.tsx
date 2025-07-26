export interface VideoReelProps {
  src: string
  poster: string
}

export function VideoReel({ src, poster }: VideoReelProps) {
  return (
    <video
      className="absolute inset-0 w-full h-full object-cover"
      src={src}
      poster={poster}
      autoPlay
      muted
      loop
      playsInline
    />
  )
}
