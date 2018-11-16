import React from 'react';
import PropTypes from 'prop-types';
import Tags from '../Tags';
import PositionWrapper from './PositionWrapper';
import Title from './Title';
import Company from './Company';
import Dates from './Dates';
import Description from './Description';

const Position = ({ title, company, dates, description, tags }) => {
  return (
    <PositionWrapper>
      <Title>{title}</Title>
      <Company>{company}</Company>
      <Dates>{dates}</Dates>
      <Description>{description}</Description>
      <Tags tags={tags} />
    </PositionWrapper>
  );
};

Position.propTypes = {
  title: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  dates: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Position;