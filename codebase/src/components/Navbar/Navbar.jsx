import React from 'react';

const menuItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'HardSkills', href: '/hardskills' }
];

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 navbar">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-white text-xl font-semibold">Eliezer Garcia</a>
        <ul className="flex space-x-4">
          {menuItems.map(item => (
            <li key={item.name}>
              <a href={item.href} className="text-white hover:text-gray-300">{item.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
