import React, { useState } from "react";
import ShoppingCartHeader from "./ShoppingCartHeader";
import ShoppingCheckout from "./ShoppingCheckout";
import CartList from "./CartList";
// import { ShoppingCartContext } from "./ShoppingCartContext";

function ShoppingCart(props) {
  const [productList, setProductList] = useState([
    {
      pname: "A",
      price: 2000,
      quantity: 2,
    },

    {
      pname: "B",
      price: 1000,
      quantity: 3,
    },
  ]);
  return (
    <div>
      <ShoppingCartHeader productList={productList}></ShoppingCartHeader>
      <CartList
        productList={productList}
        setProductList={setProductList}
      ></CartList>
      <ShoppingCheckout productList={productList}></ShoppingCheckout>
    </div>
  );
}

export default ShoppingCart;
