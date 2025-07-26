// src/components/home/MicroTestimonialVideo.tsx
export function MicroTestimonialVideo({ videoUrl, author, role, quote }) {
  return (
    <div className="bg-zinc-800 rounded-xl overflow-hidden shadow-lg max-w-xl mx-auto text-white p-6 space-y-4">
      <div className="aspect-video">
        <iframe
          src={videoUrl}
          className="w-full h-full"
          allow="autoplay; fullscreen"
        />
      </div>
      <blockquote className="italic text-zinc-300">“{quote}”</blockquote>
      <p className="text-sm font-semibold">{author} <span className="text-zinc-400">· {role}</span></p>
    </div>
  );
}
