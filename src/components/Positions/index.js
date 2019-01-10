import React from 'react';
import PropTypes from 'prop-types';
import Position from '../Position';
import ListContainer from '../ListContainer';

const Positions = ({ positions, selectedItem, onSelectItem }) => {
  return (
    <ListContainer
      list={(
        <div className={`ml3 h-100 ${selectedItem ? 'br3 paper-1 pv2' : 'flex flex-column items-center'}`}>
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
          <div className="pa4 br3 paper-1 mh2 w-auto w-90-l">
            <h2>{selectedItem.frontmatter.title}</h2>
            <h4 className="f6 black-60 mb1">{selectedItem.frontmatter.company}</h4>
            <h4 className="f6 black-30 mb4">{selectedItem.frontmatter.dates}</h4>
            <div dangerouslySetInnerHTML={{ __html: selectedItem.html }}></div>
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