import Navbar from "./components/navigation/Navbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Menu from "./components/menu/Menu";
import "./app.scss";
import { useState } from "react";
import data from "./data";


function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [projectData] = useState(data);
  return (
    <div className="app">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro/>
        <Portfolio projectData={projectData}/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
