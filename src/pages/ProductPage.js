import React from 'react';
import { useParams } from 'react-router-dom';
import { PRODUCTS } from '../components/Products';
import { addToCart } from '../components/cart-functions';
import "./ProductPage.css";

export const ProductPage = ({cartItems, setCartItems}) => {
  const { id } = useParams(); // Get the id from the URL
  const product = PRODUCTS.find(p => p.id === parseInt(id)); // Find the product with matching id

  if (!product) {
    return <div>Product not found</div>;
  }


  const { name, price, image, description} = product; //Destructure object

  return (
    <div className="product">                         {/*Display product from variables*/}
      <div className="description">
        <img src={image} alt={name} width="200" height="250"/>
        <p>{name}</p>
        <p>Price: ${price}</p>
        <p>{description}</p>
      </div>

      <button className="addtoCartButton" onClick={(event) => { //addToCart button
            event.preventDefault();
            addToCart(product.id, cartItems, setCartItems);
        }}>
        Add to Cart
      </button>

    </div>

  );
};