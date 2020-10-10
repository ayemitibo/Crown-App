import React from "react";
import { connect } from "react-redux";
import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item";

import "./cart-dropdown.styles.scss";

const CartDropdown = ({ hidden, carts }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {carts.map((item) => (
          <CartItem item={item} key={item.id} />
        ))}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

const mapStateToProps = (state) => ({
  carts: state.cart.carts,
});

export default connect(mapStateToProps)(CartDropdown);
