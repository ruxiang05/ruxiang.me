import React from 'react';
import Title from '../components/title';

const Template = ({data}) => {
  const {markdownRemark: post} = data;
  // TODO: replace div with React.Fragment
  return <div>
      <Title title={post.frontmatter.title}/>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>;
}

export default Template;

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`;