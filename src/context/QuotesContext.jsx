import react, { useCallback, useMemo, useState, createContext } from "react";
import data from "../data/data";
export const QuotesContext = createContext();

export const QuotesProvider = ({ children }) => {
  // This is for performance purposes.
  // I'am basically creating a version of the original data object
  // to compute the text format once (converting it to lowerCase) instead of running the toLowerCase() function each time the user types a character
  const normalizedData = useMemo(
    () =>
      data.map((quote) => ({
        ...quote,
        lowerText: quote.text ? quote.text.trim().toLowerCase() : "",
        lowerAuthor: quote.author ? quote.author.trim().toLowerCase() : "",
      })),
    [data]
  );

  const [savedQuotes, setSavedQuotes] = useState([]);
  const [resultQuotes, setResultQuotes] = useState(normalizedData);

  const handleChange = useCallback(
    (search) => {
      const lowerSearch = search.trim().toLowerCase();
      setResultQuotes(
        normalizedData.filter(
          (quote) =>
            quote.lowerText.includes(lowerSearch) ||
            quote.lowerAuthor.includes(lowerSearch)
        )
      );
    },
    [normalizedData]
  );

  const handleSave = useCallback((quote) => {
    setSavedQuotes((prevSavedQuotes) =>
      prevSavedQuotes.includes(quote)
        ? prevSavedQuotes.filter((item) => item !== quote)
        : [...prevSavedQuotes, quote]
    );
  }, []);
  const resetResultQuotes = useCallback(() => {
    setResultQuotes(normalizedData);
  }, [normalizedData]);
  return (
    <QuotesContext.Provider
      value={{
        resultQuotes,
        savedQuotes,
        handleChange,
        handleSave,
        setSavedQuotes,
        resetResultQuotes,
      }}
    >
      {children}
    </QuotesContext.Provider>
  );
};
