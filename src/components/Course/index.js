import React from 'react';
import PropTypes from 'prop-types';
import CourseWrapper from './CourseWrapper';
import CourseTitle from './CourseTitle';
import CourseYear from './CourseYear';
import CourseDescription from './CourseDescription';

const Course = ({ title, year, description }) => {
  return (
    <CourseWrapper>
      <CourseTitle>{title}</CourseTitle>
      <div>
        <CourseYear>{year}</CourseYear> - <CourseDescription>{description}</CourseDescription>
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