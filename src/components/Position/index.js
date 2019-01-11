import React from 'react';
import PropTypes from 'prop-types';
import Tags from '../Tags';
import PositionWrapper from './PositionWrapper';
import { Link } from '@reach/router';

const Position = ({ position }) => {
  return (
    <PositionWrapper className="measure-wide items-center pa3 br2 paper-1 mb4">
      <h2 className="mb3">{position.frontmatter.title}</h2>
      <h4 className="f6 black-60 mb1">{position.frontmatter.company}</h4>
      <h4 className="f6 black-30 mb1">{position.frontmatter.dates}</h4>
      <p className="f6 black-90">{position.frontmatter.description}</p>
      <div className="flex flex-row justify-between items-center">
        <Tags
          className="mw4 mw-100-ns"
          tags={position.frontmatter.tags}
        />
        <Link to={position.frontmatter.path}>
          <div
            className="ttu f7 pointer read-more button-hover pb1 black-70 tracked"
            title="Read more about this position"
          >
            Read more
          </div>
        </Link>
      </div>
    </PositionWrapper>
  );
};

Position.propTypes = {
  position: PropTypes.object.isRequired,
};

export default Position;