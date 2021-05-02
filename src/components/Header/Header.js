import React from "react";

import Wrapper from "./Header.styles";
import { Navbar, Nav, DropdownButton, Dropdown } from "react-bootstrap";
import Logo from "../../assets/images/logohome.svg";
import { logOut } from "../../services/auth-service";

const Header = () => {
  const handleLogOut = () => {
    logOut();
  };

  return (
    <Wrapper>
      <Navbar bg="light" variant="light">
        <Nav className="mr-auto">
          <img src={Logo} alt="logo" />
        </Nav>
        <DropdownButton
          menuAlign="right"
          title="Admin"
          id="dropdown-menu-align-right"
        >
          <Dropdown.Item eventKey="1" onClick={handleLogOut}>
            Logout
          </Dropdown.Item>
        </DropdownButton>
      </Navbar>
    </Wrapper>
  );
};

export default Header;
