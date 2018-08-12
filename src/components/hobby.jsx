import React from 'react';

const Hobby = ({title, img, children}) => (
  <div className='hobby'>
    <img src={img}/>
    <h2>{title}</h2>
    <p>{children}</p>
  </div>
)

export default Hobby;