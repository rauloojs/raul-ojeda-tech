import React from 'react';
import NavbarItem from './NavbarItem';

const Navbar = ({ hide }) => {
  return (
    <div className={`mt3 mt0-l flex-column flex-row-l self-center ${hide ? 'dn' : 'flex'}`}>
      <NavbarItem
        path="/"
        title="Experience"
      />
      <NavbarItem
        path="/expertise"
        title="Expertise"
      />
      <NavbarItem
        path="/education"
        title="Education"
      />
      <NavbarItem
        path="/skills"
        title="Skills"
      />
      <NavbarItem
        path="/about"
        title="About"
      />
    </div>
  );
};

export default Navbar;