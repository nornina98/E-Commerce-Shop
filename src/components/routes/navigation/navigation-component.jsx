import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";

import CartIcon from "../../cart-icon/cart-icon-component";
import CartDropdown from "../../cart-dropdown/cart-dropdown-component";

import { UserContext } from "../../../contexts/context-user";
import { CartContext } from "../../../contexts/context-cart";

import { SignOutUser } from "../../../utils/firebase-utils";

// Import CrownLogo in Assets
import { ReactComponent as CrownLogo } from "../../../assets/crown.svg";

// import styling from scss within same directory
import {
  NavigationContainer,
  NavLink,
  NavLinks,
  LogoContainer,
} from "./navigation-styles";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  // use fragment instead of wrapping div as cointaner
  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrownLogo className="logo " />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">Shop</NavLink>
          {currentUser ? (
            <span className="nav-link" onClick={SignOutUser}>
              Sign Out
            </span>
          ) : (
            <NavLink to="/auth">Sign In</NavLink>
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
