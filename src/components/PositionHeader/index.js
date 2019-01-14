import React from 'react';
import PositionHeaderWrapper from './PositionHeaderWrapper';

const PositionHeader = ({ title, company, dates, gradient }) => {
  return (
    <PositionHeaderWrapper
      className="paper-1 pa4 br3 mh2 w-auto w-90-l"
      gradient={gradient}
    >
      <h1>{title}</h1>
      <h4 className="white-90 mb1">{company}</h4>
      <h4 className="white-60 mb0">{dates}</h4>
    </PositionHeaderWrapper>
  );
};

export default PositionHeader;