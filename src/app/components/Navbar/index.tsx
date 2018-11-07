import * as React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as style from '../../containers/App/style.css';

export class NavbarTop extends React.Component {
  render() {
    return (
      <div>
        <Navbar className={style.navbarModifications} inverse collapseOnSelect>
          <Navbar.Header style={{ paddingLeft: '2%', paddingRight: '2%' }}>
            <Navbar.Brand>
              <span style={{ color: 'white' }}>Leslie Alldridge</span>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} href="#portfolio">
                Portfolio
              </NavItem>
              <NavItem eventKey={2} href="#blogs">
                Blogs
              </NavItem>
              <NavItem eventKey={3} href="#contact">
                Contact
              </NavItem>
              <NavItem eventKey={4} href="#about">
                About
              </NavItem>
            </Nav>
            <Nav pullRight>
              <NavItem
                eventKey={1}
                target="_blank"
                href="https://github.com/leslie-alldridge"
              >
                <FontAwesomeIcon
                  className={style.navBarIcons}
                  icon={['fab', 'github']}
                />
                Github
              </NavItem>
              <NavItem
                eventKey={2}
                target="_blank"
                href="https://www.linkedin.com/in/lesliealldridge/"
              >
                <FontAwesomeIcon
                  className={style.navBarIcons}
                  icon={['fab', 'linkedin']}
                />
                LinkedIn
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
