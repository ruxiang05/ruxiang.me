import React from 'react';
import { Helmet } from "react-helmet";
import Header from '../components/header';
import Footer from '../components/footer';
import '../../styles/index.scss';

const Layout = ({ children, location, data }) => {
  return <div>
      <Helmet
        meta={[
          { name: 'description', content: 'Ruxandra Anghel\'s personal website' },
          { name: 'keywords', content: 'personal website' },
        ]}
      >
        <html lang="en" amp />
      </Helmet>
      <Header location={location} />
      {children()}
      <Footer/>
    </div>;
};

export default Layout;
