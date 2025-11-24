import Prism from "prismjs";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-typescript";
import "prismjs/themes/prism-tomorrow.css";

interface AlgorithmDisplayProps {
  title: string;
  prompt: string;
  solution: string;
  result: string;
}

export default function Display({
  title,
  prompt,
  solution,
  result,
}: AlgorithmDisplayProps) {
  // Compute it directly — safe, fast, no re-renders
  const highlighted = Prism.highlight(
    solution,
    Prism.languages.typescript,
    "typescript"
  );

  return (
    <div className="p-6 space-y-8 bg-white rounded-xl shadow">
      {/* Title */}
      <h2 className="text-2xl font-bold">{title}</h2>

      {/* Prompt */}
      <div className="text-gray-800 whitespace-pre-line">{prompt}</div>

      {/* Code Block */}
      <div>
        <h3 className="text-xl font-semibold mb-2">Solution:</h3>

        <pre className="rounded-lg overflow-x-auto text-sm">
          <code
            className="language-javascript"
            dangerouslySetInnerHTML={{ __html: highlighted }}
          />
        </pre>
      </div>

      {/* Result */}
      <div>
        <h3 className="text-xl font-semibold mb-2">Expected Output / Notes:</h3>
        <pre className="bg-gray-100 text-gray-800 p-4 rounded-lg whitespace-pre-line">
          {result}
        </pre>
      </div>
    </div>
  );
}
