import React from 'react';
import PropTypes from 'prop-types';
import Position from '../Position';
import ListContainer from '../ListContainer';

const Positions = ({ positions, selectedItem, onSelectItem }) => {
  return (
    <ListContainer
      list={(
        <div className="shadow-right h-100">
          {positions.map(({ node }) => (
            <Position
              key={node.id}
              item={node}
              selectedItem={selectedItem}
              onClick={onSelectItem}
            />
          ))}
        </div>
      )
      }
      content={(
        <div className="pa4">
          {selectedItem && selectedItem.title}
        </div>
      )}
      selectedItem={selectedItem}
    />
  );
};

Positions.propTypes = {
  positions: PropTypes.array.isRequired,
};

export default Positions;