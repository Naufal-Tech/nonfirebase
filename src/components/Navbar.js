import React, { useState } from 'react';
import jwt from 'jsonwebtoken';
import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import styles from '../styles/Navbar.module.css';


const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleCollapse = () => {
    setIsOpen(false);
  };

  const user = jwt.decode(localStorage.getItem('accessToken'));

  return (
    <Navbar className={styles.navbar} expand="lg">
      <NavbarBrand className={styles.navbrand} href="/">
        Chapter 8 - Kelompok 3
      </NavbarBrand>
      <NavbarToggler onClick={toggleCollapse} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ms-auto" navbar>
          <NavItem className="px-2">
            <Link className={styles.navlink} to="/">
              Home
            </Link>
          </NavItem>
          {user ? (
            <>
              <NavItem className="px-2">
                <Link className={styles.navlink} to="/listgames">
                  List Games
                </Link>
              </NavItem>
              <NavItem className="px-2">
                <Link className={styles.navlink} to="/users">
                  Users
                </Link>
              </NavItem>
              <NavItem className="px-2">
                <Link
                  className={styles.navlink}
                  to="/"
                  onClick={() => localStorage.clear()}
                >
                  Logout
                </Link>
              </NavItem>
            </>
          ) : (
            <>
              <NavItem className="px-2">
                <Link className={styles.navlink} to="/login">
                  Login
                </Link>
              </NavItem>
              <NavItem className="px-2">
                <Link className={styles.navlink} to="/register">
                  Sign Up
                </Link>
              </NavItem>
            </>
          )}
        </Nav>
      </Collapse>
    </Navbar>
  );
};

// class NavigationBar extends Component {
//   state = { isOpen: false };
//   toggleCollapse = () => {
//     this.setState({
//       isOpen: !this.state.isOpen,
//     });
//   };
// }

export default NavigationBar;
