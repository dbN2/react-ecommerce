import React from "react";
import {PRODUCTS} from '../components/Products';
import {Product} from '../components/Product';
import {Link} from 'react-router-dom';
import "./Shop.css";

export const Shop = ({addToCart,cartItems,setCartItems}) => {       //Main shop page
    return ( 
        <div className = "shop">
            <div className="shopTitle">
                <h1> Shop</h1>
            </div>
            <div className="products"> 
            {PRODUCTS.map((product) => (                            //Display all products with links to their product page using component mapping
                <Link key={product.id} to={`/product/${product.id}`}>
                <Product
                  product={product}
                  addToCart={addToCart}
                  cartItems={cartItems}
                  setCartItems={setCartItems}
                />
                </Link>
            ))}
            </div>
        </div>
    )
}