import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { QuotesContext } from "../context/QuotesContext";
const Saved = () => {
  const { savedQuotes, setSavedQuotes } = useContext(QuotesContext);
  const handleRemove = (quote) => {
    setSavedQuotes(savedQuotes.filter((item) => item !== quote));
  };
  return (
    <div>
      <div className="flex flex-col gap-3 justify-center items-center py-16">
        {savedQuotes.length > 0 && (
          <h1 className="text-5xl md:text-7xl text-[#ffc64c] my-8 font-unlock">
            Saved Quotes
          </h1>
        )}
        {savedQuotes.map((quote) => {
          return (
            <div
              key={quote.id}
              className="bg-[#ada596] relative overflow-hidden flex flex-col justify-center font-Archivo min-h-[180px] w-full md:w-[700px] text-gray-800 shadow-xl"
            >
              <div>
                <Link
                  to={`/Quotify/Author/${
                    !quote.author ? "anonymous" : quote.author
                  }`}
                >
                  {" "}
                  <span className="absolute top-0 h-[40px] left-0 font-Archivo bg-[#fffcf5] shadow-lg font-normal  p-2 text-[#2d2d2d]">
                    {quote.author || "ANONYMOUS"}
                  </span>
                </Link>
              </div>

              <p className="font-playfair text-xl md:text-2xl font-semibold text-[#272727] py-[40px]">
                "{quote.text || "NO QUOTE"}"
              </p>
              <div className="absolute bottom-2 right-2 cursor-pointer ">
                <svg
                  className="text-white "
                  onClick={() => handleRemove(quote)}
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-trash-2"
                >
                  <path d="M3 6h18" />
                  <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                  <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                  <line x1="10" x2="10" y1="11" y2="17" />
                  <line x1="14" x2="14" y1="11" y2="17" />
                </svg>
              </div>
            </div>
          );
        })}
        {savedQuotes.length === 0 && (
          <h1 className="text-5xl text-center mx-auto text-white font-bold">
            {" "}
            NO SAVED QUOTES
          </h1>
        )}
      </div>
    </div>
  );
};

export default Saved;
