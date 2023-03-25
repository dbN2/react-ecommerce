import React, {useState} from 'react';
import { addToCart } from './cart-functions';
import "./Product.css";

export const Product = ({product, cartItems, setCartItems}) => {  //Product with image, name, price, and addToCart button for displaying in the Shop and Product pages
     

    return (
    <div className = "product">         
        <div className="description">
            <img src = {product.image} alt= "product.name" width="200" height="250"/>
            <p>{product.name}</p>
            <p> Price: ${product.price}</p>

        </div>

        <button className="addtoCartButton" onClick={(event) => {       
            event.preventDefault();
            addToCart(product.id, cartItems, setCartItems);
        }}>
        Add to Cart
        </button>
        </div>
        );
};

