import { Button, Card, Container, Form, Stack } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/consts";
import { login, registration } from "../api/userAPI";
import { useState } from "react";

const Auth = () => {
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const authorize = async () => {
    if (isLogin) {
      const response = await login();
    } else {
      const response = await registration(email, password);
      console.log(response);
    }
  };

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 54 }}
    >
      <Card style={{ width: 600 }} className="p-5">
        <h2 className="m-auto">{isLogin ? "Login" : "Signup"}</h2>
        <Form className="d-flex flex-column">
          <Form.Control
            className="mt-3"
            placeholder="Insert your email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Control
            className="mt-3"
            placeholder="Insert your password..."
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Stack className="d-flex flex-row justify-content-between mt-3 pl-3 pr-3">
            {isLogin ? (
              <div className="my-auto">
                Don&apos;t have an account?{" "}
                <NavLink
                  style={{ textDecoration: "none" }}
                  to={REGISTRATION_ROUTE}
                >
                  Sign Up
                </NavLink>
              </div>
            ) : (
              <div className="my-auto">
                Already have an account?{" "}
                <NavLink style={{ textDecoration: "none" }} to={LOGIN_ROUTE}>
                  Log In
                </NavLink>
              </div>
            )}
            <Button onClick={authorize} variant="outline-success">
              {isLogin ? "Log In" : "Sign Up"}
            </Button>
          </Stack>
        </Form>
      </Card>
    </Container>
  );
};

export default Auth;
