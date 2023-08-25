import React from 'react';
import { Link } from 'react-router-dom'; // Importe o Link

const menuItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'HardSkills', href: '/hardskills' }
];

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 navbar">
      <div className="container mx-auto flex justify-between items-center">
        {/* Use o Link para criar o link de navegação */}
        <Link to="/" className="text-white text-xl font-semibold">Eliezer Garcia</Link>
        <ul className="flex space-x-4">
          {menuItems.map(item => (
            <li key={item.name}>
              {/* Use o Link para criar o link de navegação */}
              <Link to={item.href} className="text-white hover:text-gray-300">{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
