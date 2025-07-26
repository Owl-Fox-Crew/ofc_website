'use client';

type LeadQuizProps = {
  questions: string[];
  resultMap: {
    title: string;
    subtitle: string;
  };
};

export function LeadQuiz({ questions, resultMap }: LeadQuizProps) {
  return (
    <div className="text-center px-6">
      <p className="italic">[Lead Quiz: próximamente interactivo]</p>

      {/* Debug (puedes borrar esto luego si no lo usas) */}
      <div className="mt-4 text-left text-sm text-zinc-400">
        <p><strong>Preguntas:</strong> {questions.length}</p>
        <p><strong>Resultado:</strong> {resultMap.title} – {resultMap.subtitle}</p>
      </div>
    </div>
  );
}
