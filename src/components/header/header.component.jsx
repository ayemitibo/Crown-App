import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { auth } from "../../firebase/firebase.utils";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

import "./header.styles.scss";

const Header = ({ currentUser, hidden, carts }) => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/shop">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link to="/signin">SiGN IN</Link>
        )}
        <CartIcon cartCount={carts.length} />
      </div>
      {!hidden ? <CartDropdown /> : null}
    </div>
  );
};

const mapStateToProps = ({
  user: { currentUser },
  cart: { hidden, carts },
}) => ({
  currentUser,
  hidden,
  carts,
});
export default connect(mapStateToProps)(Header);
