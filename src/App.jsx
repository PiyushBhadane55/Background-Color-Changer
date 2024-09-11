import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [color, setColor] = useState("blue");

  return (
    <>
      <div
        className="w-full h-screen duration-1000"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-slate-100 px-3 py-2 rounded-xl">
            <button
              onClick={() => setColor("red")}
              className="outline-none px-4 rounded-xl"
              style={{ backgroundColor: "red" }}
            >
              Red
            </button>
            <button
              onClick={() => setColor("green")}
              className="outline-none px-4 rounded-xl"
              style={{ backgroundColor: "Green" }}
            >
              Green
            </button>
            <button
              onClick={() => setColor("yellow")}
              className="outline-none px-4 rounded-xl"
              style={{ backgroundColor: "Yellow" }}
            >
              Yellow
            </button>
            <button
              onClick={() => setColor("pink")}
              className="outline-none px-4 rounded-xl"
              style={{ backgroundColor: "Pink" }}
            >
              Pink
            </button>
            <button
              onClick={() => setColor("grey")}
              className="outline-none px-4 rounded-xl"
              style={{ backgroundColor: "Grey" }}
            >
              Grey
            </button>

            <button1 onClick={() => setColor("black")}>black</button1>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
