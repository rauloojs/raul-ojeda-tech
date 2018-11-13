import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Profiles from '../components/Profiles';
import Positions from '../components/Positions';

const IndexPage = ({ data }) => (
  <Layout>
    <Profiles />
    <Positions positions={data.allPositionsJson.edges}/>
  </Layout>
)

export const query = graphql`
  query {
    allPositionsJson {
      edges {
        node {
          id,
          title,
          company,
          dates,
          description
        }
      }
    }
  }
`

export default IndexPage
