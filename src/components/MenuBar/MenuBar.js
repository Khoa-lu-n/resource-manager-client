import React from "react";

import Wrapper from "./MenuBar.styles";
import { Row, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const MenuBar = () => {
  return (
    <Wrapper>
      <Container fluid>
        <Row>
          <>
            <Link to="/dashboard/resource-manager">Resource Manage</Link>
          </>
        </Row>
        <Row>
          <>
            <Link to="/dashboard/helper">Helper</Link>
          </>
        </Row>
      </Container>
    </Wrapper>
  );
};

export default MenuBar;
