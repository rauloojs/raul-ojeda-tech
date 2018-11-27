import React, { Component } from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Profiles from '../components/Profiles';
import Positions from '../components/Positions';

class IndexPage extends Component {
  constructor (props) {
    super(props)

    this.state = {
      selectedPosition: null
    }
  }

  handleSelectPosition = (selectedPosition) => {
    console.log(selectedPosition)
    this.setState({
      selectedPosition
    })
  }

  render () {
    return (
      <Layout>
        <Profiles />
        <Positions
          positions={this.props.data.allPositionsJson.edges}
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
    }
  }
`

export default IndexPage
