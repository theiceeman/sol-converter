import { useEffect, useState } from "react";
import "./App.css";
import { getSolUsdRate } from "./utils/Rates";

function App() {
  const [lamports, setLamports] = useState("");
  const [sol, setSol] = useState("");
  // const [solUsd, setSolUsd] = useState(148);

  const handleSolKeyDown = (event) => {
    if (event.keyCode === 8 && event.target.value === "0") {
      event.preventDefault();
      setSol("");
    }
  };
  
  const handleLamportsKeyDown = (event) => {
    if (event.keyCode === 8 && event.target.value === "0") {
      event.preventDefault();
      setLamports("");
    }
  };

  function convertLamport(lamportsInNumber) {
    setSol((lamportsInNumber / 1000000000).toFixed(9));
  }

  function convertSol(solInNumber) {
    setLamports(solInNumber * 1000000000);
  }

  return (
    <>
      <div className="flex flex-col font-muli h-screen w-full md:w-2/4 mx-auto">
        <div className="flex flex-col gap-10 mt-10">
          <div className="flex mx-auto my-auto w-full text-center justify-center">
            <h1 className="text-3xl font-black px-auto">
              <a href="/">Sol Unit Converter</a>
            </h1>
          </div>

          <div className="flex w-full px-5 md:mx-auto text-[#141d2299]">
            <p>
              Lamports are the smallest unit of currency and the base unit of
              account on the Solana blockchain. <br /> One SOL equals one
              billion Lamports.
            </p>
          </div>
          <div className="flex flex-col w-full px-5 md:mx-auto">
            <form className="">
              <div className="flex flex-row mb-5">
                <label
                  htmlFor="lamports"
                  className="block my-auto text-sm font-medium text-gray-900 w-28"
                >
                  Lamports:
                </label>
                <input
                  type="number"
                  id="lamports"
                  value={lamports}
                  onKeyDown={handleLamportsKeyDown}
                  onChange={(e) => {
                    setLamports(Number(e.target.value));
                    convertLamport(Number(e.target.value));
                  }}
                  className="bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  border-gray-600 placeholder-gray-400"
                  placeholder="lamports"
                />
              </div>
              <div className="flex flex-row mb-5">
                <label
                  htmlFor="sol"
                  className="block my-auto text-sm font-medium text-gray-900 w-28"
                >
                  Sol:
                </label>
                <input
                  type="number"
                  id="sol"
                  value={sol}
                  onKeyDown={handleSolKeyDown}
                  onChange={(e) => {
                    setSol(Number(e.target.value));
                    convertSol(Number(e.target.value));
                  }}
                  className="bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  border-gray-600 placeholder-gray-400"
                  placeholder="sol"
                />
              </div>
              {/* <div className="flex flex-row mb-5">
              <label
                htmlFor="email"
                className="block my-auto text-sm font-medium text-gray-900 w-28"
              >
                SOL / USD:
              </label>
              <input
                type="number"
                id="lamports"
                className="bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  border-gray-600 placeholder-gray-400"
                placeholder="lamports"
              />
            </div> */}
            </form>
          </div>

          <div className="flex w-full justify-center">
            <h1 className="text-sm">
              © 2024
              <a
                className="text-purple-500 hover:underline"
                href="https://twitter.com/iotkelvin"
              >
                {" "}
                KelvinIOT
              </a>
              &nbsp;|&nbsp;
              <a
                className="text-purple-500 hover:underline"
                href="https://github.com/theiceeman/sol-converter"
              >
                {" "}
                GitHub
              </a>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
