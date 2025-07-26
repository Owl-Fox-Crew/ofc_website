'use client';

type CaseItem = {
  videoSrc: string;
  poster: string;
};

type CasesProps = {
  items: CaseItem[];
};

export function Cases({ items }: CasesProps) {
  return (
    <div className="max-w-5xl mx-auto px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Casos Destacados</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {items.map((item, index) => (
          <video
            key={index}
            className="w-full rounded-lg shadow-md"
            controls
            poster={item.poster}
          >
            <source src={item.videoSrc} type="video/mp4" />
            Tu navegador no soporta la reproducción de video.
          </video>
        ))}
      </div>
    </div>
  );
}
