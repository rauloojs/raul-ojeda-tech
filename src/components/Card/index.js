import React from 'react';
import PropTypes from 'prop-types';
import CardWrapper from './CardWrapper';

const Card = ({ title, icon, link }) => {
  return (
    <CardWrapper
      href={link}
      rel="noopener"
      target="_blank"
      className="flex justify-center items-center"
      title={title}
    >
      {icon}
    </CardWrapper>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  link: PropTypes.string.isRequired,
};

export default Card;