import React from 'react';
import { Link } from "react-router-dom";
import {
  Navbar,
  Nav,
  NavItem,
  NavbarBrand,
  Container
} from "reactstrap";

export const Heading = () => {
  return (
    <Navbar className="mt-4" color="dark" dark>
      <Container>
        <NavbarBrand href="/"><h1>Staff List</h1></NavbarBrand>
        <Nav>
          <NavItem>
            <Link className="btn btn-primary" to="/addStaff">Add new member</Link>
          </NavItem>
        </Nav>

      </Container>
    </Navbar>
  )
}