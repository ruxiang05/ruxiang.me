const path = require('path');

exports.createPages = ({boundActionCreators, graphql}) => {
  const {createPage} = boundActionCreators;

  const postTemplate = path.resolve('src/templates/post.jsx');

  return graphql(`{
    allMarkdownRemark {
      edges {
        node {
          html
          id
          frontmatter{
            path
            title
          }
        }
      }
    }
  }`).then(res => {
    if(res.errors) {
      return Promise.reject(res.errors);
    }

    const posts = res.data.allMarkdownRemark.edges
    posts.forEach(({node}, index) => {
      createPage({
        path: node.frontmatter.path,
        component: postTemplate,
        context: {
          prev: index === 0 ? null : posts[index - 1].node,
          next: index === posts.length - 1 ? null : posts[index + 1].node,
        }
      });
    });
  });
}