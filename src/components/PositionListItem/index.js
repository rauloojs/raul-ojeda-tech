import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '@reach/router';
import Tags from '../Tags';

const PositionListItem = ({ position }) => {
  return (
    <Link
      to={position.frontmatter.path}
      getProps={({ isCurrent }) => ({
        className: `black db pv2 pl2 mb1 pointer bb b--black-10 ${isCurrent ? '' : 'glow o-40'}`,
      })}
    >
      <div>{position.frontmatter.title}</div>
      <div className="black-50 mb1">{position.frontmatter.company}</div>
      <Tags tags={position.frontmatter.tags} />
    </Link>
  );
};

PositionListItem.propTypes = {
  position: PropTypes.object,
};

export default PositionListItem;