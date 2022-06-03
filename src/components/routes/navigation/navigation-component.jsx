import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="nav-link-logo" to="/">
          <div className="logo">LOGO</div>
        </Link>
        <div className="nav-link-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
