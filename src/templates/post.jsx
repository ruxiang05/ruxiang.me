import React from 'react';
import Link from 'gatsby-link';
import Title from '../components/title';
import angleRight from '../../assets/angle-right-light.svg';
import angleLeft from '../../assets/angle-left-light.svg';

const Template = ({data, pathContext}) => {
  const {markdownRemark: post} = data;
  const {title, date} = post.frontmatter;
  const { next, prev } = pathContext;
  // TODO: replace div with React.Fragment
  return <main className="post">
      <Title title={title} />
      <small>{date}</small>
      <div className="content" dangerouslySetInnerHTML={{ __html: post.html }} />
      {(next || prev) && <div className='routing'>
        {next && <Link className="prev" to={next.frontmatter.path}>
          <img src={angleLeft} />
          <span className='routing-title'>{next.frontmatter.title}</span>
        </Link>}
        {prev && <Link className="next" to={prev.frontmatter.path}>
          <span className='routing-title'>{prev.frontmatter.title}</span>
          <img src={angleRight} />
        </Link>}
      </div>}
    </main>;
}

export default Template;

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        date
      }
    }
  }
`;