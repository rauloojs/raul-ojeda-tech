import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from '@reach/router';

const Style = styled.span`
  padding:  0.4rem 0.6rem;
  cursor: pointer;

  &:hover {
    background: grey;
    color: white;
  }
`;


const NavbarItem = ({ path, title }) => (
  <Link
    to={path}
    className="f-row center-xs middle-xs"
  >
    <Style>
      {title}
    </Style>
  </Link>
)

NavbarItem.propTypes = {
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default NavbarItem;