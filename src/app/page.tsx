import { Word, words, difficultyLevel } from "@/lib/words";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        {words.map((word: Word) => (
          <div key={word.id} className="w-full mb-8 p-6 border rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">
              <a className="hover:text-blue-500 hover:underline" href={`https://kbbi.web.id/${word.indonesian}`} target="_blank" rel="noopener noreferrer">
                {word.indonesian}
              </a>
              {" "}|{" "}
              <a className="hover:text-blue-500 hover:underline" href={`https://dictionary.cambridge.org/dictionary/english/${word.english}`} target="_blank" rel="noopener noreferrer">
                {word.english}
              </a>
            </h2>
            <p className="mb-2"><strong>Indonesian Definition:</strong> {word.indonesianDefinition}</p>
            <p className="mb-2"><strong>English Definition:</strong> {word.englishDefinition}</p>
            <p className="mb-2"><strong>Indonesian Example:</strong> {word.indonesianExample}</p>
            <p className="mb-2"><strong>English Example:</strong> {word.englishExample}</p>
            {word.partOfSpeech && (<p className="mt-2"><strong>Part of Speech:</strong> {word.partOfSpeech}</p>)}
            {word.category && (<p className="mt-2"><strong>Category:</strong> {word.category}</p>)}
            {word.difficulty && (<p><strong>Difficulty:</strong> {difficultyLevel[word.difficulty]}</p>)}
          </div>
        ))}
      </main>
    </div>
  );
}
