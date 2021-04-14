import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavbarHome = () => {

  return(
    <>    
    <Navbar bg="primary" variant="dark">
      <Nav className="mr-auto">    
        <NavItem>
          <Link className="nav-link" to="/home">Kezdőlap</Link>
        </NavItem> 
        <NavItem>
          <Link  className="nav-link" to="/search">Keresés</Link>
        </NavItem> 
        <NavItem>
          <Link className="nav-link" to="/login">Bejelentkezés</Link>
        </NavItem> 
        <NavItem>
          <Link className="nav-link" to="/register">Regisztráció</Link>
        </NavItem> 
      </Nav>
    </Navbar>
    </>
  )
}

export default NavbarHome;