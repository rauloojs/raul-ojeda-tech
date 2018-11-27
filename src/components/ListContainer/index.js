import React from 'react';
import PropTypes from 'prop-types';
import ListWrapper from './ListWrapper';
import ContentWrapper from './ContentWrapper';

const ListContainer = ({ list, content, selectedItem }) => {
  return (
    <div className="w-100 flex self-stretch">
      <ListWrapper className={`${selectedItem ? 'db-ns dn w-40-m w-30' : 'w-100'}`}>
        {list}
      </ListWrapper>
      <ContentWrapper className={`${selectedItem ? 'w-100 w-60-m w-70' : ' dn w-0'}`}>
        {content}
      </ContentWrapper>
    </div>
  );
};

ListContainer.propTypes = {
  list: PropTypes.node.isRequired,
  content: PropTypes.node.isRequired,
  selectedItem: PropTypes.any
};

export default ListContainer;