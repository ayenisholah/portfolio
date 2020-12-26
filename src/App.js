import './App.scss';

import Navbar from "./components/header/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Tools from "./components/Tools";


function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Tools />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
