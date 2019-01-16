import React, { Component } from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Positions from '../components/Positions';

class IndexPage extends Component {
  render () {
    return (
      <Layout>
        <Positions
          positions={this.props.data.allMarkdownRemark.edges}
          asList={false}
        />
      </Layout>
    );
  }
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: {order: DESC, fields: [fileAbsolutePath]}, filter: { frontmatter: { type: { eq: "position" }}}) {
      edges {
        node {
          id,
          frontmatter {
            title,
            company,
            companySite,
            dates,
            description,
            tags {
              label,
              class
            },
            path
          }
        }
      }
    }
  }
`

export default IndexPage
