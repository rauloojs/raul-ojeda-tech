import React from 'react';
import PropTypes from 'prop-types';
import NavbarItem from './NavbarItem';
import NavbarWrapper from './NavbarWrapper';

const Navbar = (props) => {
  return (
    <NavbarWrapper>
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
    </NavbarWrapper>
  );
};

Navbar.propTypes = {
  
};

export default Navbar;