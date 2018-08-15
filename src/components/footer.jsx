import React from 'react';
import github from '../../assets/github-brands.svg'
import linkedin from '../../assets/linkedin-in-brands.svg'
import twitter from '../../assets/twitter-brands.svg'
import instagram from '../../assets/instagram-brands.svg'
const Footer = () => {
  return <footer>
      <div className='contact'>hello@ruxiang.me</div>
      <div className='social-media'>
        <a href='https://github.com/ruxiang05'>
          <img src={github} alt='GitHub logo'/>
        </a>
        <a href='https://www.linkedin.com/in/ruxiang/'>
        <img src={linkedin} alt='LinkedIn logo'/>
        </a>
        <a href='https://twitter.com/ruxi_ang'>
        <img src={twitter} alt='Twitter logo'/>
        </a>
        <a href='https://www.instagram.com/ruxi.ang/'>
        <img src={instagram} alt='Instagram logo'/>
        </a>
      </div>
      <div className="copyright">Ruxandra Anghel 2018</div>
    </footer>;
};

export default Footer;
