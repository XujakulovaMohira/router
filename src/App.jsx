import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
//terminalga react-router-domni o'rnatish **yarn add react-router-dom ** enter qilamiz nod modules
//va package.jsonga yuklaydi

import "./App.css";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import logo from "./assets/logo.svg";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <div className="logo">
            <NavLink to="/">
              <img src={logo} alt="#" />
            </NavLink>
          </div>
          <div className="nav-right">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<h1>404 not found</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
