import React, { useState } from "react";
import { useContext } from "react";
import { Itenary } from "./ProductCONTEXT";

export default function Product () {



    const [product,setProduct] = useState(["tv", "computer"])
    const [newproduct,setNewProduct] = useState("")
    const {itenary , setItenary} = useContext(Itenary)



    const del=(i)=>{
        // e.preventDefault()
        const prod = [...product]
        prod.splice(i,1)
        setProduct(prod)
    }

    const AllDel=(e)=>{
        e.preventDefault();
        setProduct([])
    }

    const edit=(i)=>{
       const newname = window.prompt("Enter new name:", product[i]);
       if(newname){
        const prod = [...product]
        prod[i] = newname
        setProduct(prod)
       }

    }

    const Add=(e,newproduct)=>{
        e.preventDefault();
        setProduct([...product, newproduct])
        setNewProduct("")
        console.log(product)

    }

    return(
        <div>
            <h1>Product CRUD</h1>
            <input placeholder="Add Product" value={newproduct} onChange={(e)=>{setNewProduct(e.target.value)}}/>
            <button onClick={(e)=>{Add(e, newproduct)}}>Add</button>
            <br></br>
            <button onClick={(e)=>{AllDel(e)}}>Clear All</button>
            {product.map((item,index)=>(
                <div>
                    {/* <input type='text' value={item} onChange={(e)=>{setEditProduct(e.target.value)}}/> */}
                    <span>{item}</span>
                    <button onClick={(e)=>{edit(index)}}>Edit</button>
                    <button onClick={()=>{del(index)}}>Delete</button>
                </div>
            ))}
            {/* <span>Edited Item:{editproduct}</span> */}
        </div>
    )
}