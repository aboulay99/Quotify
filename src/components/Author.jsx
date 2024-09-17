import React, { useContext, useMemo } from "react";
import { useParams } from "react-router-dom";
import { QuotesContext } from "../context/QuotesContext";
const Author = () => {
  let { author } = useParams();
  const { resultQuotes, savedQuotes, handleSave } = useContext(QuotesContext);
  const AuthorQuotes = useMemo(() => {
    if (author === "anonymous") {
      return resultQuotes.filter((quote) => !quote.author);
    } else {
      return resultQuotes.filter((quote) => quote.author === author);
    }
  }, [resultQuotes]);
  console.log(author);
  return (
    <div className="flex flex-col gap-3 justify-center items-center py-16">
      <div className="py-4 my-4">
        <h1 className="text-3xl md:text-5xl font-playfair font-bold text-center text-white">
          All Quotes by - {author}
        </h1>
      </div>
      {AuthorQuotes.map((quote) => (
        <div
          key={quote.id}
          className="bg-[#ada596] relative overflow-hidden flex flex-col justify-center font-Archivo min-h-[180px] w-[97%]  md:w-[700px] text-gray-800 shadow-xl"
        >
          <div>
            <span className="absolute top-0 h-[40px] left-0 font-Archivo bg-[#fffcf5] shadow-lg font-normal  p-2 text-[#2d2d2d]">
              {quote.author || "ANONYMOUS"}
            </span>
          </div>

          <p className="font-playfair text-xl md:text-2xl font-semibold text-[#272727] py-[40px] px-1">
            "{quote.text || "NO QUOTE"}"
          </p>

          {/*start :  the "save" icon */}
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
          {/* End : the "save" icon */}
        </div>
      ))}
    </div>
  );
};

export default Author;
