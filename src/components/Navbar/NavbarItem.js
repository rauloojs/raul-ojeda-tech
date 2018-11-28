import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from '@reach/router';

const Style = styled.div`
  position: relative;
  height: 100%;
  font-family: Lato;
  line-height: 1em;
  font-size: 0.8em;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin: 0 1em;

  & a {
    height: 32px;
    padding:  0.4rem 0.6rem;
    cursor: pointer;

    &.active {
      background: #318ada;
      color: #fff;
      border-radius: 5px;

      &:after {
        display: none;
      }
    }
  }
`;


const NavbarItem = ({ path, title }) => (
  <Style>
    <Link
      to={path}
      getProps={({ isCurrent }) => ({
        className: `flex justify-center items-center black-90 button-hover ${isCurrent ? "active" : ""}`
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