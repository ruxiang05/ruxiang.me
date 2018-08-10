import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import '../../styles/index.scss';

const Layout = ({ children, location }) => {
  return <div>
      <Header location={location} />
      {children()}
      <Footer/>
    </div>;
};

export default Layout;
