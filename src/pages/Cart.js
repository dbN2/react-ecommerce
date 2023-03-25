import React, {useState} from 'react';
import { PRODUCTS } from '../components/Products.js';
import { removeFromCart } from "../components/cart-functions";
import { CartItem } from "../components/CartItem";
import { Checkout } from '../components/Checkout.jsx';
import "./Cart.css";

const getTotal = (cartItems) => {       //Returns total price of items in cart
    let total = 0;
    for (let itemId in cartItems) {     
        const quantity = cartItems[itemId];
        const item = PRODUCTS.find((product) => product.id === parseInt(itemId));
        if(item){
            total += item.price * quantity;
        }
    }
    return total;
}

export const Cart = ({cartItems,setCartItems}) => {  //Cart page that includes the checkout form

    return (
        <div className="cart">
            <div className="items">
            <div>
                <h1> Cart Items</h1>
            </div>
            <div className="cartItems">
                {PRODUCTS.map((product) => {
                    if (cartItems[product.id] > 0){ //Display items in cartItems with quantity>0 
                        return <CartItem
                        key={product.id} 
                        product={product} 
                        quantity={cartItems[product.id]}
                        removeFromCart = {() => removeFromCart(product.id, cartItems, setCartItems)}
                        />
                    } 
                })}
            </div>
            </div>
            <div className="cartTotal">         
                <p> Cart Total: ${getTotal(cartItems)} </p>  {/*Display cart total*/}
            </div>  
        
        <div className="checkout">
        <Checkout cartItems={cartItems} setCartItems={setCartItems}/> {/*Display checkout form*/}
        </div>

        </div>
    )
};

