import React from 'react';
import PropTypes from 'prop-types';
import Tags from '../Tags';
import PositionWrapper from './PositionWrapper';

const Position = ({ item, selectedItem, onClick }) => {
  return selectedItem ? (
    <div
      className={`pv2 pl2 mb1 pointer bb b--black-10 ${selectedItem.id !== item.id ? 'glow o-60' : ''}`}
      onClick={() => onClick(item)}
    >
      <div className="f6">{item.title}</div>
      <div className="f7 black-50 mb1">{item.company}</div>
      <Tags tags={item.tags} />
    </div>
  ) : (
    <PositionWrapper className="measure-wide items-center pa3 br2 paper-1 mb4">
      <h2 className="mb3">{item.title}</h2>
      <h4 className="f6 black-60 mb1">{item.company}</h4>
      <h4 className="f6 black-30 mb1">{item.dates}</h4>
      <p className="f6 black-90">{item.description}</p>
      <div className="flex flex-row justify-between items-center">
        <Tags
          className="mw4 mw-100-ns"
          tags={item.tags}
        />
        <span
          className="ttu f7 pointer read-more button-hover pb1 black-70 tracked"
          onClick={() => onClick(item)}
          title="Read more about this position"
        >
          Read more
        </span>
      </div>
    </PositionWrapper>
  );
};

Position.propTypes = {
  item: PropTypes.object.isRequired,
};

export default Position;