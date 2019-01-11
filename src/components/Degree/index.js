import React from 'react';
import PropTypes from 'prop-types';
import DegreeWrapper from './DegreeWrapper';
import DegreeTitle from './DegreeTitle';
import DegreeUniversity from './DegreeUniversity';
import DegreeDates from './DegreeDates';

const Degree = ({ title, university, dates }) => {
  return (
    <DegreeWrapper>
      <DegreeTitle>{title}</DegreeTitle>
      <DegreeUniversity>{university}</DegreeUniversity>
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