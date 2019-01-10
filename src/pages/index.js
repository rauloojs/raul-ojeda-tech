import React, { Component } from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Positions from '../components/Positions';

class IndexPage extends Component {
  constructor (props) {
    super(props)

    this.state = {
      selectedPosition: null
    }
  }

  handleSelectPosition = (selectedPosition) => {
    this.setState({
      selectedPosition
    })
  }

  render () {
    return (
      <Layout>
        <Positions
          positions={this.props.data.allMarkdownRemark.edges}
          selectedItem={this.state.selectedPosition}
          onSelectItem={this.handleSelectPosition}
        />
      </Layout>
    );
  }
}

export const query = graphql`
  query {
    allPositionsJson {
      edges {
        node {
          id,
          title,
          company,
          dates,
          description,
          tags {
            label,
            class
          }
        }
      }
    },
    allMarkdownRemark(sort: {order: DESC, fields: [fileAbsolutePath]}, filter: { frontmatter: { type: { eq: "position" }}}) {
      edges {
        node {
          id,
          html,
          frontmatter {
            title,
            company,
            dates,
            description,
            tags {
              label,
              class
            }
          }
        }
      }
    }
  }
`

export default IndexPage
