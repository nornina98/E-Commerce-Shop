import { Outlet } from "react-router-dom";
import { Fragment } from "react";
import { useSelector } from "react-redux";
import CartIcon from "../../cart-icon/cart-icon-component";
import CartDropdown from "../../cart-dropdown/cart-dropdown-component";

import { selectIsCartOpen } from "../../../store/cart/cart-selector";

import { SignOutUser } from "../../../utils/firebase-utils";
import { selectCurrentUser } from "../../../store/user/user-selector";

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
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

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
