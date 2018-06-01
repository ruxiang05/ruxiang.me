import React from 'react';
import github from '../../assets/github-brands.svg'
import linkedin from '../../assets/linkedin-in-brands.svg'
import twitter from '../../assets/twitter-brands.svg'
import instagram from '../../assets/instagram-brands.svg'
const Footer = () => {
  return <footer>
      <div className='footer-name'>Ruxandra Anghel</div>
      <div className='contact'>hello@ruxiang.me</div>
      <div className='social-media'>
        <a href='https://github.com/ruxiang05'>
          <img src={github} />
        </a>
        <a href='https://www.linkedin.com/in/ruxiang/'>
          <img src={linkedin} />
        </a>
        <a href='https://twitter.com/ruxi_ang'>
          <img src={twitter} />
        </a>
        <a href='https://www.instagram.com/ruxi.ang/'>
          <img src={instagram} />
        </a>
      </div>
      <div className="copyright">Ruxandra Anghel 2018</div>
    </footer>;
};

export default Footer;
