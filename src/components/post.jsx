import React from 'react';

const Post = ({header, content}) => {
// TODO: replace div with React.Fragment
  return (
    <div className>
      <h5>{header}</h5>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  )
}

export default Post;