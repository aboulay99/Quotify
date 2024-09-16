import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QuotesProvider } from "./context/QuotesContext.jsx";
import HomePage from "./components/HomePage.jsx";
import Saved from "./components/Saved.jsx";
import Nav from "./components/Nav.jsx";
import Author from "./components/Author.jsx";

const App = () => {
  return (
    <QuotesProvider>
      <Router>
        <Nav />
        <Routes>
          <Route path="Quotify" element={<HomePage />} />
          <Route path="Quotify/saved" element={<Saved />} />
          <Route path="Quotify/Author/:author" element={<Author />} />
        </Routes>
      </Router>
    </QuotesProvider>
  );
};

export default App;
