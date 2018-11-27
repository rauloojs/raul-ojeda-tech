import React from 'react';
import PropTypes from 'prop-types';
import Tags from '../Tags';
import PositionWrapper from './PositionWrapper';
import Title from './Title';
import Company from './Company';
import Dates from './Dates';
import Description from './Description';

const Position = ({ item, selectedItem, onClick }) => {
  return selectedItem ? (
    <div
      className={`pv2 pl2 bb b--black-10 pointer ${selectedItem.id !== item.id && 'glow o-60'}`}
      onClick={() => onClick(item)}
    >
      <div className="f7">{item.title}</div>
      <div className="f7 black-30">{item.company}</div>
      <Tags tags={item.tags} />
    </div>
  ) : (
    <PositionWrapper onClick={() => onClick(item)}>
      <Title>{item.title}</Title>
      <Company>{item.company}</Company>
      <Dates>{item.dates}</Dates>
      <Description>{item.description}</Description>
      <Tags tags={item.tags} />
    </PositionWrapper>
  );
};

Position.propTypes = {
  item: PropTypes.object.isRequired,
};

export default Position;