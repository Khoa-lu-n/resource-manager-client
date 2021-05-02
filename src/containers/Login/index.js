import React, { useCallback, useState } from "react";

import { Form, FormControl, FormLabel, Button } from "react-bootstrap";

import Wrapper from "./index.styles.js";
import Logo from "../../assets/images/logo.svg";
import * as UserApi from "../../api/user-api";

const Login = () => {
  let [domain, setDomain] = useState("");
  let [userName, setUserName] = useState("");
  let [password, setPassword] = useState("");

  const handleLogin = useCallback(async () => {
    if (!userName || !password || !domain) {
      alert("Something missing.");
    } else {
      let res = await UserApi.login({
        user_name: userName,
        password,
        domain
      });
      if (res.success) {
        await localStorage.setItem("token", res.data.token);
        window.location.replace("/dashboard");
        // // history.push("/dashboard");
      }
    }
  }, [domain, userName, password]);

  return (
    <Wrapper>
      <div className="wrapper-form">
        <div className="header">
          <div className="wrapper-logo">
            <img src={Logo} alt="logo" className="logo" />
          </div>
          <h3>Log in</h3>
        </div>
        <Form>
          <Form.Group>
            <FormLabel>Domain</FormLabel>
            <FormControl
              type="text"
              value={domain}
              onChange={e => {
                setDomain(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group>
            <FormLabel>User name</FormLabel>
            <FormControl
              type="text"
              value={userName}
              onChange={e => {
                setUserName(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group>
            <FormLabel>Password</FormLabel>
            <FormControl
              type="password"
              value={password}
              onChange={e => {
                setPassword(e.target.value);
              }}
            />
          </Form.Group>
        </Form>
        <div className="footer">
          <Button variant="primary" type="submit" onClick={handleLogin}>
            Sign in
          </Button>
        </div>
      </div>
    </Wrapper>
  );
};

export default Login;
