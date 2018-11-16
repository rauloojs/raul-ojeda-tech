import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from '@reach/router';

const Style = styled.span`
  & a {
  padding:  0.4rem 0.6rem;
  cursor: pointer;

  &.active, &:hover {
    background: grey;
    color: white;
  }
}
`;


const NavbarItem = ({ path, title }) => (
  <Style>
  <Link
    to={path}
    getProps={({ isCurrent }) => ({
      className: `f-row center-xs middle-xs ${isCurrent ? "active" : ""}`
    })}
  >
      {title}
  </Link>
    </Style>
)

NavbarItem.propTypes = {
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default NavbarItem;