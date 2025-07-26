export interface MicroTestimonialVideoProps {
  author: string
  role?: string
  videoUrl: string
  quote?: string
}

export function MicroTestimonialVideo({
  author,
  role,
  videoUrl,
  quote
}: MicroTestimonialVideoProps) {
  return (
    <div className="container mx-auto px-6 max-w-3xl">
      <h2 className="text-2xl font-semibold mb-4">Lo que dicen</h2>
      <video
        src={videoUrl}
        className="w-full rounded-xl"
        controls
        muted
        playsInline
      />
      <div className="mt-4 opacity-80 text-sm">
        <p className="font-medium">{author}</p>
        {role && <p>{role}</p>}
        {quote && <p className="mt-2 italic">“{quote}”</p>}
      </div>
    </div>
  )
}
