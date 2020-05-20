import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { LinkContainer } from "react-router-bootstrap";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Dropdown from "react-bootstrap/Dropdown";
import { useAuth } from "./../util/auth.js";

function NavbarCustom(props) {
  const auth = useAuth();

  return (
    <Navbar bg={props.bg} variant={props.variant} expand={props.expand}>
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>
            <img
              className="d-inline-block align-top"
              src={props.logo}
              alt="Logo"
              height="70"
            ></img>
          </Navbar.Brand>
        </LinkContainer>

        <Navbar.Toggle
          aria-controls="navbar-nav"
          className="border-0"
        ></Navbar.Toggle>
        <Navbar.Collapse id="navbar-nav" className="justify-content-end">
          <Nav>
            {auth.user && (
              <NavDropdown id="dropdown" title="Account" alignRight={true} style={{
                textAlign: 'center'
              }}>
                <LinkContainer to="/dashboard">
                  <NavDropdown.Item active={false}>Dashboard</NavDropdown.Item>
                </LinkContainer>

                <LinkContainer to="/settings">
                  <NavDropdown.Item active={false}>Settings</NavDropdown.Item>
                </LinkContainer>

                <Dropdown.Divider></Dropdown.Divider>

                <LinkContainer to="/auth/signout">
                  <NavDropdown.Item
                    active={false}
                    onClick={(e) => {
                      e.preventDefault();
                      auth.signout();
                    }}
                  >
                    Sign out
                  </NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
            )}

            {!auth.user && (
              <Nav.Item>
                <LinkContainer to="/auth/signin">
                  <Nav.Link active={false}
                  style={{
                    color: '#0d4879!important'
                  }}
                  >Sign in</Nav.Link>
                </LinkContainer>
              </Nav.Item>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarCustom;
