import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavbarText
} from 'reactstrap';
import { Link } from 'react-router-dom'

import './header.css'

import 'bootstrap/dist/css/bootstrap.min.css';
const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" className="bg-nvbar-cls" light expand="md">
        <NavbarToggler color="primary" style={{ marginBottom: '1rem' }} onClick={toggle} />
        <Collapse color="white" className="menus" isOpen={isOpen} navbar>
          <Nav center className="mr-auto ml-auto" navbar>
            <NavItem>
              <Link replace={true} className="nav-link" to="/">
                <img className="logoc" height="23px" width="23px" src="/instrumentm.svg" alt="logo" />
              </Link>
            </NavItem>
            <NavItem>
              <Link replace={true} className="nav-link" style={{ textDecoration: 'none', color: 'wheat' }} to="/framework">framework</Link>
            </NavItem>
            <NavItem>
              <Link replace={true} className="nav-link" to="/support">support</Link>
            </NavItem>
            <NavItem>
              <Link replace={true} className="nav-link" to="/about">about</Link>
            </NavItem>

            <NavItem>
              <Link replace={true} className="nav-link" to="/blog">blog</Link>
            </NavItem>
          </Nav>
          <Link replace={true} to="/login">
            <NavbarText className="hideMed" style={{ color: 'white' }}>
              Jan Homriguasen
          </NavbarText>
            <NavbarText>
              <img className="iconacco" height="24px" width="50px" src="/user.svg" alt="logo" />
            </NavbarText>
          </Link>
        </Collapse>
      </Navbar>
      {/* <Content/> */}
    </div>
  );
}

export default Header;