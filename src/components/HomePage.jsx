import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { QuotesContext } from "../context/QuotesContext.jsx";
const HomePage = () => {
  const {
    resultQuotes,
    handleChange,
    handleSave,
    savedQuotes,
    resetResultQuotes,
  } = useContext(QuotesContext);
  useEffect(() => {
    resetResultQuotes();
  }, [resetResultQuotes]);
  return (
    <div className="flex flex-col gap-3 justify-center items-center py-16">
      <h1 className="text-5xl md:text-7xl text-white my-8 font-unlock font-semibold">
        <span className="text-[#ffc64c]">Quot</span>ify
      </h1>
      <div className="w-[97%] flex items-center justify-center ">
        <input
          id="search"
          className=" text-gray-700 outline-slate-100 font-normal opacity-[97%] w-full shadow-md md:w-[700px] p-3"
          placeholder="search author or quote"
          type="text"
          onChange={(e) => handleChange(e.target.value)}
        />
      </div>
      {resultQuotes.map((quote) => {
        return (
          <div
            key={quote.id}
            className="bg-[#ada596] relative overflow-hidden flex flex-col justify-center font-Archivo min-h-[180px] w-[97%]  md:w-[700px] text-gray-800 shadow-xl"
          >
            <div>
              <Link
                to={`/Quotify/Author/${
                  quote.author !== null ? quote.author : "anonymous"
                }`}
              >
                <span className="absolute top-0 h-[40px] left-0 font-Archivo bg-[#fffcf5] shadow-lg font-normal  p-2 text-[#2d2d2d]">
                  {quote.author || "ANONYMOUS"}
                </span>
              </Link>
            </div>

            <p className="font-playfair text-xl md:text-2xl font-semibold text-[#272727] py-[40px] px-1">
              "{quote.text || "NO QUOTE"}"
            </p>
            <div className="absolute bottom-2 right-2 hover:scale-110 duration-150">
              <svg
                className="cursor-pointer"
                onClick={() => handleSave(quote)}
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill={savedQuotes.includes(quote) ? "#fff" : "none"}
                stroke="black"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
              </svg>
            </div>
          </div>
        );
      })}
      {resultQuotes.length === 0 && (
        <h1 className="text-5xl mx-auto text-white font-bold"> NO RESULT</h1>
      )}
    </div>
  );
};

export default HomePage;
