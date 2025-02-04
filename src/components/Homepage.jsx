import React from "react";
import './App.css';
import { Link } from "react-router-dom";

const Homepage= () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Première partie : Image avec présentation */}
      <header className="relative h-64 bg-cover bg-center" style={{ backgroundImage: 'url(https://via.placeholder.com/1500)' }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-3xl md:text-5xl text-white font-bold text-center px-4">
            Bienvenue sur notre site !
          </h1>
        </div>
      </header>

      {/* Deuxième partie : Zone de texte pour les commentaires */}
      <main className="flex-1 bg-gray-50 py-12 px-4 md:px-8">
        <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-6 space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800 text-center">Vos commentaires</h2>
          <textarea
            className="w-full border rounded-lg p-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
            placeholder="Laissez vos commentaires ici..."
          ></textarea>
          <div className="flex justify-center space-x-4">
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700">
              Commander
            </button>
            <button className="px-6 py-2 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700">
              Réserver
            </button>
          </div>
        </div>
      </main>

      {/* Troisième partie : Footer */}
      <footer className="bg-gray-800 text-gray-200 py-6">
        <div className="max-w-4xl mx-auto grid grid-cols-2 gap-4 md:grid-cols-4">
          <div>
            <h3 className="font-semibold mb-2">Liens utiles</h3>
            <ul className="space-y-1">
              <li><Link to="/" className="hover:underline">Accueil</Link></li>
              <li><Link to="/about" className="hover:underline">À propos</Link></li>
              <li><Link to="/services" className="hover:underline">Services</Link></li>
              <li><Link to="/contact" className="hover:underline">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Support</h3>
            <ul className="space-y-1">
              <li><Link to="/faq" className="hover:underline">FAQ</Link></li>
              <li><Link to="/help" className="hover:underline">Aide</Link></li>
              <li><Link to="/privacy" className="hover:underline">Politique de confidentialité</Link></li>
              <li><Link to="/terms" className="hover:underline">Conditions d'utilisation</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Contactez-nous</h3>
            <ul className="space-y-1">
              <li>Email : contact@example.com</li>
              <li>Téléphone : +33 1 23 45 67 89</li>
              <li>Adresse : 123 Rue Exemple, Paris</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Suivez-nous</h3>
            <ul className="space-y-1">
              <li><Link to="/facebook" className="hover:underline">Facebook</Link></li>
              <li><Link to="/twitter" className="hover:underline">Twitter</Link></li>
              <li><Link to="/instagram" className="hover:underline">Instagram</Link></li>
              <li><Link to="/linkedin" className="hover:underline">LinkedIn</Link></li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-6 text-sm">© 2025 VotreSite. Tous droits réservés.</div>
      </footer>
    </div>
  );
};

export default Homepage;

