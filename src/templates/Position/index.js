import React from 'react';
import PropTypes from 'prop-types';
import ListContainer from '../../components/ListContainer';
import Positions from '../../components/Positions';
import { graphql } from 'gatsby';
import Layout from '../../components/Layout';

const Position = ({ data, pageContext }) => {
  const position = data.markdownRemark;

  return (
    <Layout>
      <ListContainer
        list={(
          <Positions
            positions={pageContext.positions}
            asList={true}
          />
        )}
        content={(
          <div className="pa4 br3 paper-1 mh2 w-auto w-90-l">
            <h2>{position.frontmatter.title}</h2>
            <h4 className="black-60 mb1">{position.frontmatter.company}</h4>
            <h4 className="black-30 mb4">{position.frontmatter.dates}</h4>
            <div dangerouslySetInnerHTML={{ __html: position.html }}></div>
          </div>
        )}
        selectedItem={position}
      />
    </Layout>
  );
};

Position.propTypes = {
  data: PropTypes.object,
  selectedItem: PropTypes.object,
  onSelectItem: PropTypes.func,
};

export const query = graphql`
  query($pathId: String!) {
    markdownRemark(frontmatter: { path: { eq: $pathId } }) {
      html,
      frontmatter {
        title
        company
        dates
        description
        type
        shortDescription
      }
    }
  }
`;

export default Position;