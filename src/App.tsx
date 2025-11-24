import { useState } from "react";
import Algorithm from "./components/algorithms/Algorithms";
import Components from "./components/react-components/Components";
import System from "./components/system-design/System";

function App() {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className=" py-10 text-3xl font-bold text-teal-700">
        Project to work on my interview prep
      </h1>
      <p>
        1. Algorithm problems
        <br />
        2.Front-End Component Build
        <br />
        3.System Design Mini-Session
      </p>

      <div className="p-8 space-y-4">
        <h2 className="flex justify-center text-2xl text-teal-800">
          Choose your adventure
        </h2>
        <div className="flex justify-center space-x-2">
          <button
            className="px-4 py-2 bg-teal-600 text-white rounded"
            onClick={() => setActive("Algorithm")}
          >
            Algorithm Problems
          </button>
          <button
            className="px-4 py-2 bg-teal-600 text-white rounded"
            onClick={() => setActive("Component")}
          >
            Component Build
          </button>
          <button
            className="px-4 py-2 bg-teal-600 text-white rounded"
            onClick={() => setActive("System")}
          >
            System Design
          </button>
        </div>
        <div className="mt-4">
          {active === "Algorithm" && <Algorithm />}
          {active === "Component" && <Components />}
          {active === "System" && <System />}
        </div>
      </div>
    </div>
  );
}

export default App;
