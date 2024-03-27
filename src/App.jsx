import { useEffect, useState } from "react";
import "./App.css";
import { getSolUsdRate } from "./utils/Rates";

function App() {
  const [lamports, setLamports] = useState("");
  const [sol, setSol] = useState("");
  const [solUsd, setSolUsd] = useState(148);

  // useEffect(() => {
  //   async function fetchData() {
  //     let result = await getSolUsdRate();
  //     console.log({ result });
  //   }

  //   fetchData();
  // }, []);

  function convertLamport(lamportsInNumber) {
    if (lamportsInNumber == 0) {
      setSol("");
      setLamports("");
      return;
    }
    setSol((lamportsInNumber / 1000000000).toFixed(9));
  }

  function convertSol(solInNumber) {
    if (solInNumber == 0) {
      setSol("");
      setLamports("");
      return;
    }
    setLamports(solInNumber * 1000000000);
  }

  return (
    <>
      <div className="flex flex-col font-muli h-screen">
        <div className="flex flex-col gap-10 mt-10">
          <div className=" max-w-[33rem] mx-auto my-auto px-3">
            <div className="flex py-3 justify-between">
              <h1 className="text-3xl font-black">
                <a href="/">Sol Unit Converter</a>
              </h1>
            </div>
          </div>
          <div className="flex w-2/4 mx-auto text-[#141d2299]">
            <p>
              Lamports are the smallest unit of currency and the base unit of
              account on the Solana blockchain. <br /> One SOL equals one
              billion Lamports.
            </p>
          </div>

          <form className="w-2/4 mx-auto">
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

          <div className=" flex-grow max-w-[33rem] mx-auto px-3">
            <div className="flex py-3 justify-between">
              <h1 className="text-sm">
                © 2024
                <a
                  className="text-purple-500 hover:underline"
                  href="https://twitter.com/iotkelvin"
                >
                  {" "}
                  KelvinIOT
                </a>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
