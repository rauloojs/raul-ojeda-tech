import React from 'react';
import Course from '../Course';
import Paper from '../Paper';

const Courses = () => {
  return (
    <Paper>
      <h2>Courses and certifications</h2>
      <Course
        title="Certified SCRUM Master"
        year="2017"
        description={
          <>
            <a href="https://www.scrumalliance.org/community/profile/rojeda">Scrum Alliance</a>
          </>
        }
      />
      <Course
        title="Learn and Understand AngularJS"
        year="2016"
        description={
          <>
            <a href="https://www.udemy.com/certificate/UC-HIG2L0KT/">Udemy</a>
          </>
        }
      />
      <Course
        title="Webapps development for FirefoxOS with HTML5, CSS and Javascript"
        year="2015"
        description={
          <>
            Webapps development for FirefoxOS with HTML5, CSS and Javascript
          </>
        }
      />
      <Course
        title="Programming Mobile Applications for Android Handheld Systems"
        year="2014"
        description={
          <>
            Maryland University <a href="https://www.coursera.org/account/accomplishments/verify/C8KEK7FXHH">(Coursera)</a>
          </>
        }
      />
      <Course
        title="Programming Cloud Services for Android Handheld Systems"
        year="2014"
        description={
          <>
            Vanderbilt University <a href="https://www.coursera.org/account/accomplishments/verify/PXD527VX7P">(Coursera)</a>
          </>
        }
      />
      <Course
        title="Pattern-Oriented Software Architectures: Programming Mobile"
        year="2014"
        description={
          <>
            Vanderbilt University <a href="https://www.coursera.org/account/accomplishments/verify/RCFQY4E58L">(Coursera)</a>
          </>
        }
      />
      <Course
        title="An Introduction to Interactive Programming in Python"
        year="2014"
        description={
          <>
            Rice University (Coursera)
          </>
        }
      />
      <Course
        title="Learn to Program: The Fundamentals with Python"
        year="2013"
        description={
          <>
            Toronto University (Coursera)
          </>
        }
      />
    </Paper>
  );
};

export default Courses;