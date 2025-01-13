import React, { useContext, useEffect, useState } from "react";
import { ShoppingCartContext } from "./ShoppingCartContext";

function ShoppingCartHeader() {
  const {productList} = useContext(ShoppingCartContext);
  
  let s = 0;
  for(let prod of productList){
    s += prod.quantity
  }
  const [itemCount, setItemCount] = useState(1);
 
  useEffect(()=>setItemCount(s), [productList])
  return <div>
    Items: {itemCount}</div>;
}

export default ShoppingCartHeader;
