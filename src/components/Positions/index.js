import React from 'react';
import PropTypes from 'prop-types';
import Position from '../Position';
import PositionListItem from '../PositionListItem';

const Positions = ({ positions, asList }) => {
  return (
    <div
      className={`${asList ? 'ml3 br3 paper-1 positions-list' : 'flex flex-column items-center'}`}
    >
      {positions.map(({ node }) => asList ? (
        <PositionListItem
          key={node.id}
          position={node}
        />
      ) : (
        <Position
          key={node.id}
          position={node}
        />
      ))}
    </div>
  );
};

Positions.propTypes = {
  positions: PropTypes.array.isRequired,
  asList: PropTypes.bool,
};

export default Positions;
