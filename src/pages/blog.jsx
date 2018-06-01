import React from 'react';
import Link from 'gatsby-link';
//import Post from '../components/post';
import Title from '../components/title';
// TODO: replace div with React.Fragment
const Blog = ({ data }) => (
  <main>
    <section className="portfolio">
      <p>Coming soon</p>
    </section>
  </main>
  // <div>
  //   <Title title='Posts'/>
  //   <ul className='post-list'>
  //     {data.allMarkdownRemark.edges.map(post => (
  //       <li className='post-item' key={post.node.id}>
  //         <Link className='post' to={post.node.frontmatter.path}>
  //           <Post header={post.node.frontmatter.title} content />
  //         </Link>
  //       </li>
  //     ))}
  //   </ul>
  // </div>
);


// export const pageQuery = graphql`
//          query IndexQuery {
//            allMarkdownRemark(limit: 10, sort: { fields: [frontmatter___date], order: DESC }, filter: { frontmatter: { published: { eq: true } } }) {
//              edges {
//                node {
//                  html
//                  id
//                  frontmatter {
//                    title
//                    path
//                    published
//                  }
//                }
//              }
//            }
//          }
//        `;
export default Blog;
