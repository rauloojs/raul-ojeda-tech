import React from 'react';
import PropTypes from 'prop-types';

const AboutCard = ({ icon, content }) => {
  return (
    <div className={`mb4 flex`}>
      <div className="w-20 w-10-ns flex justify-center black-30" style={{ fontSize: '1.5rem' }}>{icon}</div>
      <div className="flex w-100">{content}</div>
    </div>
  );
};

AboutCard.propTypes = {
  icon: PropTypes.node,
  content: PropTypes.node,
};

export default AboutCard;
