import './App.css';
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Homepage from './components/Homepage.jsx'; 
import Propos from './components/Propos';
import Contact from './components/Contact';
import Service from './components/Service';

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-green-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 text-2xl font-bold">
            <Link to="/">MonLogo</Link>
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="hover:text-gray-200">
              Accueil
            </Link>
            <Link to="/propos" className="hover:text-gray-200">
              À propos
            </Link>
            <Link to="/services" className="hover:text-gray-200">
              Services
            </Link>
            <Link to="/contact" className="hover:text-gray-200">
              Contact
            </Link>
          </nav>
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden bg-green-700">
          <nav className="space-y-2 py-4 px-4">
            <Link to="/Homepage" className="block text-white hover:bg-green-500 rounded px-3 py-2">
              Accueil
            </Link>
            <Link to="/propos" className="block text-white hover:bg-green-500 rounded px-3 py-2">
              À propos
            </Link>
            <Link to="/services" className="block text-white hover:bg-green-500 rounded px-3 py-2">
              Services
            </Link>
            <Link to="/contact" className="block text-white hover:bg-green-500 rounded px-3 py-2">
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Router>
          <Route path="/Homepage" element={<Homepage />} />
          <Route path="/propos" element={<Propos />} />
          <Route path="/services" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
        </Router>
      </main>
    </Router>
  );
}

export default App;
