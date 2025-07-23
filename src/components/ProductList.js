import React from "react";
import {useDispatch} from 'react-redux'
import { addToCart } from "../features/cart/cartSlice.js";

const products =  [
    { id : 1, title: 'iphone', price :999},
    { id : 2, title: 'Macbook', price :1999},
    { id : 3, title: 'Airpods', price :199},
];

const ProductList = () => {
    const dispatch = useDispatch();

    return(
        <div>
            <h2>Products</h2>
            {products.map((product)=> (
                <div key={product.id}> 
                <h4>{product.title}</h4>
                <p>{product.price}</p>
                <button onClick={() => dispatch(addToCart(product))}> Add to Cart</button>
                </div>
                )
          )} 
        </div>
    );
};


export default ProductList;
