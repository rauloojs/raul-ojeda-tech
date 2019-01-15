import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from '../Header'
import Profiles from '../Profiles';

import '../../css/tachyons.css';
import '../../css/main.css';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title,
            indexTitle
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: `Raúl Ojeda's personal site` },
            { name: 'keywords', content: 'dev, javascript' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.indexTitle} />
        <Profiles className="flex-l flex-column justify-center dn fixed z-1 right-center paper-1-hover br2 br--left overflow-hidden" />
        <div
          className="pb4 pt6 layout-content"
        >
          {children}
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
