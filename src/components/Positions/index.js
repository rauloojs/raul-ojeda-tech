import React from 'react';
import PropTypes from 'prop-types';
import PositionsWrapper from './PositionsWrapper';
import Position from '../Position';

const Positions = ({ positions }) => {
  return (
    <PositionsWrapper>
      {positions.map(({ node }) => (
        <Position
          key={node.id}
          title={node.title}
          company={node.company}
          dates={node.dates}
          description={node.description}
        />
      ))}
    </PositionsWrapper>
  );
};

Positions.propTypes = {
  positions: PropTypes.array.isRequired,
};

export default Positions;