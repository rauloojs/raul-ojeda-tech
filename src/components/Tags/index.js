import React from 'react';
import PropTypes from 'prop-types';
import TagsWrapper from './TagsWrapper';
import Tag from './Tag';

const Tags = ({ tags, ...props }) => (
  <TagsWrapper {...props}>
    {tags.map((tag, index) => (
      <Tag
        key={index}
        className={tag.class}
      >{tag.label}</Tag>
    ))}
  </TagsWrapper>
);

Tags.propTypes = {
  tags: PropTypes.array.isRequired,
};

export default Tags;