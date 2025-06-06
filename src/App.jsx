import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import "./App.css";
import myImage from "./images/bike.jpg";

function App() {
  const myList = {
    padding: "0",
    margin: "0",
    listStyle: "none",
    display: "flex",
  };

  return (
    <Router>
      <nav className="Navbar">
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img src={myImage} alt="mypic" className="image" />
        </a>
        <ul className="list" style={myList}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<blog/>} />
      </Routes>
    </Router>
  );
}

export default App;
