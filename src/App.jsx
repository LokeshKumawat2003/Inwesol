import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import BlogList from "./components/BlogList";
import ContactForm from "./components/ContactForm";
import "./App.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>

      <nav className="navbar">
        <div className="container navbar-content">

          <div className="logo-container">
            <Link to="/" className="logo">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR63-MFsRn0_jWL46D70ITZomtbQGr3Au9Stw&s" alt="Logo" />
              MyBlog
            </Link>
          </div>

          <div className="nav-links">
            <Link to="/">Blogs</Link>
            <Link to="/contact">Contact</Link>
          </div>

          <button className="menu-btn" onClick={() => setIsOpen(!isOpen)}>
            ☰
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="mobile-menu">
          <Link to="/" onClick={() => setIsOpen(false)}>Blogs</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}

      <div className="container main-content">
        <Routes>
          <Route path="/" element={<BlogList />} />
          <Route path="/contact" element={<ContactForm />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
