import { createContext } from "react";
import React from "react";
import { useState } from "react";


const ShoppingCartContext = createContext(null)

const ShoppingCartProvider = ({children})=>{
    const [productList, setProductList] = useState([
        { pname: 'A', price: 2000, quantity: 2 },
        { pname: 'B', price: 1000, quantity: 3 },
      ]);

      return(
        <ShoppingCartContext.Provider value={{productList, setProductList}}>
            {children}
        </ShoppingCartContext.Provider>
      )
};

export { ShoppingCartContext, ShoppingCartProvider };