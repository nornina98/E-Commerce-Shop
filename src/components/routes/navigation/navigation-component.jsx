import { Outlet } from "react-router-dom";
import { Fragment, useContext } from "react";
import { useSelector } from "react-redux";

import CartIcon from "../../cart-icon/cart-icon-component";
import CartDropdown from "../../cart-dropdown/cart-dropdown-component";

import { CartContext } from "../../../contexts/context-cart";

import { SignOutUser } from "../../../utils/firebase-utils";

// Import CrownLogo in Assets
import { ReactComponent as CrownLogo } from "../../../assets/crown.svg";

// import styling within same directory
import {
  NavigationContainer,
  NavLink,
  NavLinks,
  LogoContainer,
} from "./navigation-styles.jsx";

const Navigation = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
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
            <NavLink as="span" onClick={SignOutUser}>
              Sign Out
            </NavLink>
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
