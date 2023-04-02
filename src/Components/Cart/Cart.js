import React, { useContext } from "react";

import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartContext from "../../Store/Cart-context";
import CartItem from "./CartItem";
const Cart = (props) => {
  const cartctx = useContext(CartContext);

  const totalamount = `$${cartctx.totalAmount.toFixed(2)}`;
  const hasitem = cartctx.items.length > 0;

  const cartItemRemoveHandler = (id) => {

    cartctx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {

     cartctx.addItem({...item, amount:1});
  };
  const cartItem = (
    <ul className={classes["cart-items"]}>
      {cartctx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          price={item.price}
          amount={item.amount}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null,item)}
        />
      ))}
    </ul>
  );
  return (
    <Modal onClose={props.onClose}>
      {cartItem}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalamount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        {hasitem && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
