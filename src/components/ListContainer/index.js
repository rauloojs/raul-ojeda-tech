import React from 'react';
import PropTypes from 'prop-types';
import ListWrapper from './ListWrapper';
import ContentWrapper from './ContentWrapper';

const ListContainer = ({ list, content, selectedItem }) => {
  return (
    <div className="w-100 flex items-start">
      <ListWrapper className={`${selectedItem ? 'db-ns dn w-30-ns' : 'w-100'}`}>
        {list}
      </ListWrapper>
      <ContentWrapper className={`${selectedItem ? 'w-100 w-70-ns' : ' dn w-0'}`}>
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