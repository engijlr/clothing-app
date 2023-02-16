import { React, Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import { CartContext } from "../contexts/CartContext";
import { signOutUser } from "../utils/firebase";
import { ReactComponent as CrwnLogo } from "../assets/crown.svg";
import CartIcon from "../CartIcon";
import CartDropdown from "../CartDropdown";
import "./Navbar.css";

const Navbar = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navbar;
