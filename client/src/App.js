import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from './components/Contact';
import Header from './components/Header';
import Home from './components/Home';
import Gallery from "./components/Gallery";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
