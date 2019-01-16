import React from 'react';
import PropTypes from 'prop-types';
import DegreeWrapper from './DegreeWrapper';
import DegreeTitle from './DegreeTitle';
import DegreeDates from './DegreeDates';

const Degree = ({ title, university, dates }) => {
  return (
    <DegreeWrapper>
      <DegreeTitle>{title}</DegreeTitle>
      <span>{university}</span>
      <DegreeDates>{dates}</DegreeDates>
    </DegreeWrapper>
  );
};

Degree.propTypes = {
  title: PropTypes.string.isRequired,
  university: PropTypes.string.isRequired,
  dates: PropTypes.string.isRequired,
};

export default Degree;