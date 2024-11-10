import { useContext } from "react";
import { Context } from "../main";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from "../utils/consts";
import { observer } from "mobx-react-lite";

const NavBar = observer(() => {
  const { user, cart } = useContext(Context);
  const navigate = useNavigate();
  const logOut = () => {
    user.setUser({});
    user.setIsAuth(false);
    cart.setCart({});
    console.log(cart.cart.id);
  };
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container fluid className="plr-0">
        <NavLink
          style={{ color: "white", textDecoration: "none" }}
          to={SHOP_ROUTE}
        >
          Go to shop
        </NavLink>
        {user.isAuth ? (
          <Nav className="ml-auto" style={{ color: "white" }}>
            <Button
              variant="outline-light"
              onClick={() => navigate(ADMIN_ROUTE)}
            >
              Admin
            </Button>
            <Button
              variant="outline-light"
              onClick={() => logOut()}
              className="ms-2"
            >
              Log out
            </Button>
          </Nav>
        ) : (
          <Nav className="ml-auto" style={{ color: "white" }}>
            <Button
              variant="outline-light"
              onClick={() => navigate(LOGIN_ROUTE)}
            >
              Log in
            </Button>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
});

export default NavBar;
