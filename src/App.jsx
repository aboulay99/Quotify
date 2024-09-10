import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QuotesProvider } from "./context/QuotesContext.jsx";
import HomePage from "./components/HomePage.jsx";
import Saved from "./components/Saved.jsx";
import Nav from "./components/Nav.jsx";

const App = () => {
  return (
    <QuotesProvider>
      <Router>
        <Nav />
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/saved" element={<Saved />} />
        </Routes>
      </Router>
    </QuotesProvider>
  );
};

export default App;
