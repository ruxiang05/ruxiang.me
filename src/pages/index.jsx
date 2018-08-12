import React from 'react';
import me from '../../assets/me.png';
import PostPreview from '../components/post-preview';

const IndexPage = ({ data }) => (
  <main>
    <section className="intro">
      <img src={me} />
      <div>
        <p>
          Hi, I'm Ruxandra (Ruxi). I'm a developer based in London,
          United Kingdom.
        </p>
        <p>Beginner fitness shark, sucker for minimalism and travel enthusiast.</p>
      </div>
    </section>
    <section className="preview">
      <h1 className="preview-title">Blog</h1>
      <div className="posts">
        {data.allMarkdownRemark.edges.map(post => (
          <PostPreview
            header={post.node.frontmatter.title}
            date={post.node.frontmatter.date}
            content={post.node.excerpt}
          />
        ))}
      </div>
    </section>
  </main>
);

export const previewBlogQuery = graphql`
  query PreviewBlogQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 3
    ) {
      edges {
        node {
          html
          id
          excerpt(pruneLength: 150)
          frontmatter {
            title
            path
            date
          }
        }
      }
    }
  }
`;
export default IndexPage;
