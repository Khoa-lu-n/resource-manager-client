import React from "react";
import Wrapper from "./Home.styles.js";
import { Switch, Route, Redirect } from "react-router-dom";
import Header from "../../components/Header";
import MenuBar from "../../components/MenuBar";
import { Row, Col } from "react-bootstrap";
import { HOME_ROUTE, DEFAULT_HOME_ROUTE } from "./home-route";

const Home = () => {
  return (
    <Wrapper>
      <div className="header">
        <Header />
      </div>
      <Row>
        <Col sm={2} className="menu">
          <MenuBar />
        </Col>
        <Col sm={10}>
          <div className="content">
            <Switch>
              {HOME_ROUTE.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  component={route.component}
                  exact={route.exact}
                />
              ))}
              <Redirect to={DEFAULT_HOME_ROUTE.path} />
            </Switch>
          </div>
        </Col>
      </Row>
    </Wrapper>
  );
};

export default Home;
