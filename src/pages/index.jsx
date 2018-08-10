import React from 'react';
import Title from '../components/title';
import me from '../../assets/me.png'
import placeholder from '../../assets/placeholder.jpg';

const IndexPage = () => (
  <main>
    <div className='home'>
      <img src={me}/>
      <p>Ruxandra is a developer in training based in London, United Kingdom.</p>
    </div>
  </main>
);

export default IndexPage;
