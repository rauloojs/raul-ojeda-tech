import React from 'react';
import PositionHeaderWrapper from './PositionHeaderWrapper';

const PositionHeader = ({ title, company, companySite, dates, gradient }) => {
  return (
    <PositionHeaderWrapper
      className="paper-1 pa3 pa4-l br3 mh2 w-auto w-90-l"
      gradient={gradient}
    >
      <h1>{title}</h1>
      <a href={companySite}><h3 className="white-90 mb1">{company}</h3></a>
      <h4 className="white-60 mb0">{dates}</h4>
    </PositionHeaderWrapper>
  );
};

export default PositionHeader;