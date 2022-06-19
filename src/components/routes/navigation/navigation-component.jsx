import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";

import { UserContext } from "../../../contexts/context-user";

// Import CrownLogo in Assets
import { ReactComponent as CrownLogo } from "../../../assets/crown.svg";

// import styling from scss within same directory
import "./navigation-styles.scss";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  console.log(currentUser);
  // use fragment instead of wrapping div as cointaner
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrownLogo className="logo " />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
          <Link className="nav-link" to="/auth">
            Sign In
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
