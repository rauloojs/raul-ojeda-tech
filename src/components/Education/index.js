import React from 'react';
import Paper from '../Paper';
import Degree from '../Degree';

const Education = () => {
  return (
    <Paper>
      <h2>Education</h2>
      <div className="flex flex-column">
        <Degree
          title="B.S. Computer Sciences Degree"
          university="Benemérita Universidad Autónoma de Puebla"
          dates="August 2011 - December 2015"
        />
      </div>
    </Paper>
  );
};

export default Education;