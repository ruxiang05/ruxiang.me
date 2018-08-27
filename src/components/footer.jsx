import React from 'react';
// * icons are from "feather" set
import github from '../../assets/github.svg'
import linkedin from '../../assets/linkedin.svg'
import twitter from '../../assets/twitter.svg'
import instagram from '../../assets/instagram.svg'
const Footer = () => {
  return <footer>
      <a className='contact' href='mailto:hello@ruxiang.me'>hello@ruxiang.me</a>
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
