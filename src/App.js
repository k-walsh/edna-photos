import NavBar from "./components/nav/NavBar";
import { HashRouter, Route, Routes } from "react-router-dom";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Projects from "./components/pages/Projects";
import Portfolio from "./components/pages/Portfolio";
import Home from "./components/pages/Home";
import "./styles/main.css";

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
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
