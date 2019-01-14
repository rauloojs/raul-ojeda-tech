import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import rehypeReact from 'rehype-react';

import ListContainer from '../../components/ListContainer';
import Positions from '../../components/Positions';
import Layout from '../../components/Layout';
import PositionHeader from '../../components/PositionHeader';

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {},
}).Compiler

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
          <>
            <PositionHeader
              title={position.frontmatter.title}
              company={position.frontmatter.company}
              dates={position.frontmatter.dates}
            />
            <div className="pa4 br3 mh2 w-auto w-90-l">
              <h1>Table of contents</h1>
              <div className="table-of-contents" dangerouslySetInnerHTML={{__html: position.tableOfContents}}></div>
              {renderAst(position.htmlAst)}
            </div>
          </>
        )}
      />
    </Layout>
  );
};

Position.propTypes = {
  data: PropTypes.object,
  onSelectItem: PropTypes.func,
};

export const query = graphql`
  query($pathId: String!) {
    markdownRemark(frontmatter: { path: { eq: $pathId } }) {
      htmlAst,
      tableOfContents(pathToSlugField: "frontmatter.path")
      frontmatter {
        title
        company
        dates
        description
        type
        shortDescription
        path
      }
    }
  }
`;

export default Position;
