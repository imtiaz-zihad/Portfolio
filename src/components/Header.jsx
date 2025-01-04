import { useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar"; // Desktop Navbar
import MobileNav from "./MobileNav"; // Mobile Navbar

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu visibility

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the menu open/close state
  };

  return (
    <div className="py-8 text-white px-4 bg-gray-900">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/">
          <h1 className="text-4xl font-semibold">
            Imtiaz <span className="text-accent">.</span>
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          <NavBar />
          <Link to="/contact">
            <button className="btn bg-accent text-black font-bold border-none rounded-3xl">
              Hire me
            </button>
          </Link>
        </div>

        {/* Mobile Navigation: Hamburger Icon */}
        <div className="lg:hidden flex items-center">
          {/* Hamburger Icon */}
          <button onClick={toggleMenu} className="text-white p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Backdrop for Mobile Menu */}
          {isMenuOpen && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              onClick={() => setIsMenuOpen(false)}
            ></div>
          )}

          {/* Mobile Menu */}
          <div
            className={`absolute right-0 top-16 bg-gray-800 w-64 p-4 transition-all duration-300 ease-in-out transform ${
              isMenuOpen ? "translate-y-0 opacity-100 z-50" : "translate-y-[-140%] opacity-0 z-[-10]"
            }`}
          >
            <MobileNav closeMenu={() => setIsMenuOpen(false)} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
