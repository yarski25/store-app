import { useContext } from "react";
import { Context } from "../main";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { SHOP_ROUTE } from "../utils/consts";
import { observer } from "mobx-react-lite";

const NavBar = observer(() => {
  const { user } = useContext(Context);
  console.log(user);
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container fluid className="plr-0">
        <NavLink
          style={{ color: "white", textDecoration: "none" }}
          to={SHOP_ROUTE}
        >
          Buy device
        </NavLink>
        {user.isAuth ? (
          <Nav className="ml-auto" style={{ color: "white" }}>
            <Button variant="outline-light">Admin</Button>
            <Button variant="outline-light" className="ms-2">
              Log in
            </Button>
          </Nav>
        ) : (
          <Nav className="ml-auto" style={{ color: "white" }}>
            <Button
              variant="outline-light"
              onClick={() => user.setIsAuth(true)}
            >
              Sign up
            </Button>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
});

export default NavBar;