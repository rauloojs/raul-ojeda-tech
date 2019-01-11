const path = require(`path`);

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return graphql(`
    {
      allMarkdownRemark(sort: {order: DESC, fields: [fileAbsolutePath]}) {
        edges {
          node {
            id,
            frontmatter {
              path,
              title,
              company,
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
).then(result => {
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: path.resolve(`./src/templates/Position/index.js`),
        context: {
          positions: result.data.allMarkdownRemark.edges,
          pathId: node.frontmatter.path,
        },
      });
    });
  })
};
