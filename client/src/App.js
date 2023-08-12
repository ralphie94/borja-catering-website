import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from './components/Contact';
import Header from './components/Header';
import Home from './components/Home';
import Gallery from "./components/Gallery";
import Explore from "./components/Explore";
import SirloinMenu from "./components/SirloinMenu";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/sirloin-menu" element={<SirloinMenu />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
