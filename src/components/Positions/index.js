import React from 'react';
import PropTypes from 'prop-types';
import Position from '../Position';
import ListContainer from '../ListContainer';

const Positions = ({ positions, selectedItem, onSelectItem }) => {
  return (
    <ListContainer
      list={(
        <div className={`ml2 h-100 ${selectedItem ? 'br3 paper-1 pv2' : 'flex flex-column items-center'}`}>
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
        selectedItem && (
          <div className="pa4 br3 paper-1 mh2">
            <h2>{selectedItem.title}</h2>
            <h4 className="f6 black-60 mb1">{selectedItem.company}</h4>
            <h4 className="f6 black-30 mb4">{selectedItem.dates}</h4>
            <p>{selectedItem.description}</p>
          </div>
        )
      )}
      selectedItem={selectedItem}
    />
  );
};

Positions.propTypes = {
  positions: PropTypes.array.isRequired,
};

export default Positions;