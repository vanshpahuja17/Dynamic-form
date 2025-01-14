import React, { useContext } from "react";
import { ShoppingCartContext } from "./ShoppingCartContext";

function CartList() {
  const {productList,setProductList} = useContext(ShoppingCartContext);

  const changeValue = (i, event) => {
    //console.log(i) // 0 , 1,2 .....
    let newValue = parseInt(event.target.value, 10);
    if (isNaN(newValue)) {
      newValue = 1;
    } 
    else if (newValue > 100) {
      newValue = Math.floor(newValue/10);
    }
    
    let updatedProductList = [...productList]
    updatedProductList[i].quantity = newValue

    setProductList(updatedProductList);
  };

  const deleteProduct = (i) => {
    let vansh = [...productList]
    // let index  = vansh.indexOf(i)
    // console.log(index)
    vansh.splice(i,1)
    setProductList(vansh);
  };
  return (
    <div>
      {productList.map((product, index) => (
        <>
          <p>Product name: {product.pname}</p>
          <p>Price: {product.price}</p>
          <p>
            Quantity:
            <input
              type="text"
              value={product.quantity}
              onChange={(event) => changeValue(index, event)}
            />
            <button onClick={() => deleteProduct(index)}>Delete</button>
          </p>
        </>
      ))}
    </div>
  );
}

export default CartList;
