import React from 'react';
import PropTypes from 'prop-types';
import CourseWrapper from './CourseWrapper';
import CourseTitle from './CourseTitle';
import CourseYear from './CourseYear';

const Course = ({ title, year, description }) => {
  return (
    <CourseWrapper>
      <CourseTitle>{title}</CourseTitle>
      <div>
        <CourseYear>{year}</CourseYear> - <span>{description}</span>
      </div>
    </CourseWrapper>
  );
};

Course.propTypes = {
  title: PropTypes.string,
  year: PropTypes.string,
  description: PropTypes.node,
};

export default Course;