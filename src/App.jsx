import Navbar from "./components/navigation/Navbar";
import Intro from "./components/intro/Intro";
import Works from "./components/works/Works";
import Contact from "./components/contact/Contact";
import "./app.scss";


function App() {
  return (
    <div className="app">
      <Navbar/>
      <div className="sections">
        <Intro/>
        <Works/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
