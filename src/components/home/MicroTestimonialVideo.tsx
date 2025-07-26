// src/components/home/MicroTestimonial.tsx
type MicroTestimonialProps = {
  quote: string;
  author: string;
  role: string;
};

export function MicroTestimonial({ quote, author, role }: MicroTestimonialProps) {
  return (
    <div className="max-w-2xl mx-auto px-6 py-12 text-center">
      <blockquote className="text-xl italic text-zinc-300">“{quote}”</blockquote>
      <p className="mt-4 font-semibold">{author}</p>
      <p className="text-sm text-zinc-400">{role}</p>
    </div>
  );
}
