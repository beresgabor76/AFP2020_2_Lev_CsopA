import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavbarAdmin = () => {

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
          <Link className="nav-link" to="/inspect">Új feltöltések</Link>
        </NavItem>
        <NavItem>
          <Link className="nav-link" to="/regadmin">Admin regisztráció</Link>
        </NavItem> 
        <NavItem>
          <Link className="nav-link" to="/home">Kijelentkezés</Link>
        </NavItem> 
      </Nav>
    </Navbar>
    </>
  )
}

export default NavbarAdmin;