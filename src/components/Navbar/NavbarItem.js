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

  & a:after {
    bottom: 0;
    left: 50%;
    width: 0;
    position: absolute;
    background: #5f5f5fde;
    border-radius: 5px;
    content: "";
    transition: all 0.3s;
    transform: translateX(-50%);
    height: 0;
    opacity: 0;
  }

  & a:not(.active):hover:after{
    height: 2px;
    opacity: 1;
    width: 100%;
  }

  & a {
    height: 100%;
    padding:  0.4rem 0.6rem;
    cursor: pointer;

    &:active {
      color: initial;
    }

    &.active {
      background: #5f5f5fde;
      color: #efefef;
      border-radius: 5px;
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