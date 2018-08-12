import React from 'react';

const PostPreview = ({header, date, content}) => {
// TODO: replace div with React.Fragment
  return (
    <div className='post-preview'>
      <h2>{header}</h2>
      <p>{date}</p>
      <p dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  )
}

export default PostPreview;