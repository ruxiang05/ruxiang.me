import React from 'react';
import Link from 'gatsby-link';

const NavItem = ({page}) => (
  <Link className="nav-item" activeClassName="nav-item-active" exact to={`/${page==='home'? '' : page}`}>
    {page}
  </Link>
)

const Header = ({ location }) => {
  return <header>
      <Link className='logo' exact to='/'>Ruxandra Anghel</Link>
      <nav>
        <NavItem page="home" />
        {/*<NavItem page="portfolio" />*/}
        <NavItem page="hobbies" />
        <NavItem page="blog" />
      </nav>
    </header>;
};

export default Header;
