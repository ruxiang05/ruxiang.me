import React from 'react';

const PostPreview = ({header, date, content, index}) => {
  return (
    <div className='post-preview'>
      <h2>{header}</h2>
      <p className='meta'>#{index}: {date}</p>
      <p dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  )
}

export default PostPreview;