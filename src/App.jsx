import { useState } from "react";

function App() {
  const [color, setColor] = useState("#212121");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl">
        <button
          onClick={() => setColor("red")}
          className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
          style={{ backgroundColor: "red" }}
        >
          Red
        </button>
        <button
          onClick={() => setColor("green")}
          className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
          style={{ backgroundColor: "green" }}
        >
          Green
        </button>
        <button
          onClick={() => setColor("blue")}
          className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
          style={{ backgroundColor: "blue" }}
        >
          Blue
        </button>
        <button
          onClick={() => setColor("lavender")}
          className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
          style={{ backgroundColor: "lavender" }}
        >
          lavender
        </button>
        <button
          onClick={() => setColor("olive")}
          className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
          style={{ backgroundColor: "olive" }}
        >
          Olive
        </button>
        <button
          onClick={() => setColor("#0B7A75")}
          className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
          style={{ backgroundColor: "#0B7A75"}}
        >
          Surfie Green
        </button>
        <button
          onClick={() => setColor("aqua")}
          className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
          style={{ backgroundColor: "aqua"}}
        >
          Aqua
        </button>
        <button
          onClick={() => setColor("purple")}
          className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
          style={{ backgroundColor: "purple"}}
        >
         Purple
        </button>
        <button
          onClick={() => setColor("yellow")}
          className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
          style={{ backgroundColor: "yellow"}}
        >
         Yellow
        </button>
        <button
          onClick={() => setColor("brown")}
          className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
          style={{ backgroundColor: "brown"}}
        >
         Brown
        </button>
        <button
          onClick={() => setColor("orange")}
          className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
          style={{ backgroundColor: "orange"}}
        >
         Orange
        </button>

      </div>
    </div>
  );
}

export default App;
