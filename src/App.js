import NavBar from "./components/nav/NavBar";
import { HashRouter, Route, Routes } from "react-router-dom";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Work from "./components/pages/Work";
import Home from "./components/pages/Home";

function App() {
  return (
    <div>
      {/* <h1 style={{ rotate: "-26deg" }}>B</h1>
      <h2 style={{ margin: 0 }}>ECOMING</h2>
      <h2 style={{ margin: 0 }}>THE MUSE</h2> */}
      <HashRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/work" element={<Work />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
