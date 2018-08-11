import React from 'react';
import Link from 'gatsby-link';
import PostPreview from '../components/post-preview';
import Title from '../components/title';
// TODO: replace div with React.Fragment
const Blog = ({ data }) => (
  <main>
    <section className='blog'>
      <Title title='Blog' />
      <ul className='posts'>
        {data.allMarkdownRemark.edges.map(post => (
          <li className='post-item' key={post.node.id}>
            <Link to={post.node.frontmatter.path}>
              <PostPreview
                header={post.node.frontmatter.title}
                date={post.node.frontmatter.date}
                content={post.node.excerpt} />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  </main>
);


export const pageQuery = graphql`
         query IndexQuery {
           allMarkdownRemark(limit: 10, sort: { fields: [frontmatter___date], order: DESC }) {
             edges {
               node {
                 html
                 id
                 excerpt(pruneLength: 150)
                 frontmatter {
                   title
                   path
                 }
               }
             }
           }
         }
       `;
export default Blog;
