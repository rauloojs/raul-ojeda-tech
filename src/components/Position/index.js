import React from 'react';
import PropTypes from 'prop-types';
import Tags from '../Tags';
import PositionWrapper from './PositionWrapper';
import { Link } from '@reach/router';

const Position = ({ position }) => {
  return (
    <PositionWrapper className="measure-wide items-center pa3 br2 paper-1 mb4">
      <Link to={position.frontmatter.path} className="black">
        <h2 className="mb3">{position.frontmatter.title}</h2>
      </Link>
      <a rel="noopener" href={position.frontmatter.companySite}>
        <h4 className="black-60 mb1">{position.frontmatter.company}</h4>
      </a>
      <h4 className="black-30 mb3">{position.frontmatter.dates}</h4>
      <p className="black-90" dangerouslySetInnerHTML={{__html: position.frontmatter.description}}></p>
      <div className="flex flex-row justify-between items-center">
        <Tags
          className="mw4 mw-100-ns"
          tags={position.frontmatter.tags}
        />
        <Link to={position.frontmatter.path}>
          <div
            className="ttu f6 pointer read-more button-hover pb1 black-70 tracked"
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