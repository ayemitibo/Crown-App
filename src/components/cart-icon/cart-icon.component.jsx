import React, { Component } from "react";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { connect } from "react-redux";
import "./cart-icon.styles.scss";
import { setCartState } from "../../redux/cart/cart.action";

class CartIcon extends Component {
  changeCartState = (props) => {
    const { setCartState, hidden } = this.props;
    setCartState(!hidden);
  };

  render() {
    const { cartCount } = this.props;
    return (
      <div className="cart-icon" onClick={this.changeCartState}>
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count">{cartCount}</span>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  hidden: state.cart.hidden,
});

const mapDispatchToProps = (dispatch) => ({
  setCartState: (isHidden) => dispatch(setCartState(isHidden)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
