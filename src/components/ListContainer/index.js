import React from 'react';
import PropTypes from 'prop-types';
import ListWrapper from './ListWrapper';
import ContentWrapper from './ContentWrapper';

const ListContainer = ({ list, content }) => {
  return (
    <div className="w-100 flex self-stretch">
      <ListWrapper className={`db-ns dn w-40-m w-30`}>
        {list}
      </ListWrapper>
      <ContentWrapper className={`w-100 w-60-m w-70`}>
        {content}
      </ContentWrapper>
    </div>
  );
};

ListContainer.propTypes = {
  list: PropTypes.node.isRequired,
  content: PropTypes.node,
  selectedItem: PropTypes.any
};

export default ListContainer;