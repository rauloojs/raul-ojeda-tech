import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '@reach/router';
import { FaCode } from 'react-icons/fa';

const SiteTitle = ({ small }) => {
  return (
    <Link
      to="/"
      className="flex items-center black-80"
    >
      <FaCode className={`${small ? 'f3 mr1' : 'f1 mr3'}`} />
      <div className="flex flex-column">
        <h2 className={`ma0 tracked-tight ${small ? 'f3' : 'f1'}`}>
          Raúl <span className="brand-color">Ojeda</span>
        </h2>
        <h3 className={`f5 pl1 ma0 mt1 black-50 ${small && 'dn'}`}>
          Senior Software Engineer
        </h3>
      </div>
    </Link>
  );
};

SiteTitle.propTypes = {
  small: PropTypes.bool
};

export default SiteTitle;
