import React from 'react';
import PropTypes from 'prop-types';
import TagsWrapper from './TagsWrapper';
import Tag from './Tag';

const Tags = ({ tags }) => (
  <TagsWrapper>
    {tags.map((tag, index) => (
      <Tag key={index}>{tag}</Tag>
    ))}
  </TagsWrapper>
);

Tags.propTypes = {
  tags: PropTypes.array.isRequired,
};

export default Tags;