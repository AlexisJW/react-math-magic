import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const links = [
    {
      link: '/',
      text: 'Home',
    },
    {
      link: '/calculator',
      text: 'Calculator',
    },
    {
      link: '/quote',
      text: 'Quote',
    },
  ];

  return (
    <nav className="nav">
      <h1 className="title">Math Magicians</h1>
      <ul className="nav_buttons_container">
        {
          links.map((link) => (
            <li key={link.text} className="nav_buttons">
              <NavLink
                to={link.link}
                style={({ isActive }) => ({
                  color: isActive ? 'red' : undefined,
                })}
              >
                {link.text}
              </NavLink>
            </li>
          ))
        }
      </ul>
    </nav>
  );
}
