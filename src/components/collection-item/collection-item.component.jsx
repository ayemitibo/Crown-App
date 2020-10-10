import React from "react";
import CustomButton from "../custom-button/custom-button.component";
// import { useState } from "react";
import { connect } from "react-redux";
import { setCart } from "../../redux/cart/cart.action";
import "./collection-item.styles.scss";

const CollectionItem = ({ item, setCart }) => {
  const { name, price, imageUrl } = item;
  // const [cartDetails,setCartDetails] = useState({})
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton onClick={() => setCart(item)}> ADD TO CART</CustomButton>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  setCart: (cart) => dispatch(setCart(cart)),
});
export default connect(null, mapDispatchToProps)(CollectionItem);
