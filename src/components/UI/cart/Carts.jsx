// Importing necessary components and modules
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {ListGroup} from "reactstrap";
import CartItem from "./CartItem"; // Assuming CartItem component is in the same directory
import {cartUiActions} from "../../../store/shopping-cart/cartUiSlice";
import "../../../styles/shopping-cart.css";

const Carts = () => {
  const dispatch = useDispatch();
  const cartsProducts = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  // Function to close the cart
  const toggleCart = () => {
    dispatch(cartUiActions.toggle());
  };

  // Function to handle checkout
  const handleCheckout = () => {
    // Additional logic for handling checkout if needed

    // Close the cart after handling checkout
    toggleCart();
  };

  return (
    <div className="cart__container">
      <ListGroup className="cart">
        <div className="cart__close">
          {/* Close button to hide the cart */}
          <span onClick={toggleCart}>
            <i className="ri-close-fill"></i>
          </span>
        </div>

        <div className="cart__item-list">
          {cartsProducts.length === 0 ? (
            // Display message if the cart is empty
            <h6 className="text-center mt-5">No item added to the cart</h6>
          ) : (
            // Render each item in the cart
            cartsProducts.map((item, index) => (
              <CartItem item={item} key={index} />
            ))
          )}
        </div>

        <div className="cart__bottom d-flex align-items-center justify-content-between">
          {/* Display the subtotal of the cart */}
          <h6>
            Subtotal: <span className="currency">₦</span>
            <span>{totalAmount}</span>
          </h6>

          {/* Link to the checkout page */}
          <button onClick={handleCheckout}>
            <Link to="/checkout">Checkout</Link>
          </button>
        </div>
      </ListGroup>
    </div>
  );
};

export default Carts;
