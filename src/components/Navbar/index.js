import React from 'react';
import PropTypes from 'prop-types';
import NavbarItem from './NavbarItem';

const Navbar = (props) => {
  return (
    <div className="col-xs-12 f-row center-xs">
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

Navbar.propTypes = {
  
};

export default Navbar;