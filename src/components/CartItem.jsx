import React, {useState} from 'react';
import "./CartItem.css";

export const CartItem = ({product, removeFromCart, cartItems, setCartItems,quantity}) => {  //Cart product with removeFromCart button instead of addToCart
    

    return (
    <div className = "cartItem">
        <div className="description">
            <img src = {product.image} alt= "product.name" width="200" height="250"/>
            <p>{product.name}  </p>
            <p> Price: ${product.price}</p>
            <p> Quantity: {quantity}</p>
        </div>
        <button className="removeFromCartButton" onClick={() => removeFromCart(product.id, cartItems, setCartItems)}>
            Remove from Cart
        </button>
        </div>
        );
};

