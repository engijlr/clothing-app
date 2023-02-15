import { React, Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import { signOutUser } from "../utils/firebase";
import { ReactComponent as CrwnLogo } from "../crown.svg";
import "./Navbar.css";

const Navbar = () => {
  const { currentUser } = useContext(UserContext);
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navbar;
