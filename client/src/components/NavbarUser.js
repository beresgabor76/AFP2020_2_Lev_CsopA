import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavbarUser = () => {

  return(
    <>    
    <Navbar bg="primary" variant="dark">
      <Nav className="mr-auto">    
        <NavItem>
          <Link className="nav-link" to="/homeuser">Kezdőlap</Link>
        </NavItem> 
        <NavItem>
          <Link  className="nav-link" to="/search">Keresés</Link>
        </NavItem> 
        <NavItem>
          <Link className="nav-link" to="/upload">Feltöltés</Link>
        </NavItem> 
        <NavItem>
          <Link className="nav-link" to="/revise">Javítás</Link>
        </NavItem>
        <NavItem>
          <Link className="nav-link" to="/home">Kijelentkezés</Link>
        </NavItem> 
      </Nav>
    </Navbar>
    </>
  )
}

export default NavbarUser;