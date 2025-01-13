import React, { useContext } from "react";
import { ShoppingCartContext } from "./ShoppingCartContext";

function ShoppingCheckout() {
    const {productList} = useContext(ShoppingCartContext);
  
  let s = 0;
  for (let prod of productList) {
    s += prod.quantity * prod.price;
  }
  const subTotal = s;
  const total = subTotal + 5;
  return (
    <div>
      <p>Subtotal = {subTotal}</p>
      <p>Total = {total}</p>
    </div>
  );
}

export default ShoppingCheckout;
