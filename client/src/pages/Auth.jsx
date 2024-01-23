import { Button, Card, Container, Form, Stack } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/consts";

const Auth = () => {
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 54 }}
    >
      <Card style={{ width: 600 }} className="p-5">
        <h2 className="m-auto">{isLogin ? "Login" : "Signup"}</h2>
        <Form className="d-flex flex-column">
          <Form.Control className="mt-3" placeholder="Insert your email..." />
          <Form.Control
            className="mt-3"
            placeholder="Insert your password..."
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
            <Button variant="outline-success">
              {isLogin ? "Log In" : "Sign Up"}
            </Button>
          </Stack>
        </Form>
      </Card>
    </Container>
  );
};

export default Auth;
