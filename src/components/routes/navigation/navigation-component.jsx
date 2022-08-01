import { Outlet } from "react-router-dom";
import { Fragment, useContext } from "react";

import CartIcon from "../../cart-icon/cart-icon-component";
import CartDropdown from "../../cart-dropdown/cart-dropdown-component";

import { CartContext } from "../../../contexts/context-cart";
import { UserContext } from "../../../contexts/context-user";

import { SignOutUser } from "../../../utils/firebase-utils";

// Import CrownLogo in Assets
import { ReactComponent as CrwnLogo } from "../../../assets/crown.svg";

// import styling within same directory
import {
  NavigationContainer,
  NavLink,
  NavLinks,
  LogoContainer,
} from "./navigation-styles.jsx";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo className="logo" />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">SHOP</NavLink>

          {currentUser ? (
            <NavLink as="span" onClick={SignOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
