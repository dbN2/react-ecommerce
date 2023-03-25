import { PRODUCTS } from "./Products";



export const getDefaultCart = () => {  //Initalize a cart with no items. Value of each element is its quantity in the cart, and index is equal to product's id
    let cart = {}
    for( let i=0; i<PRODUCTS.length; i++){
        cart[i] = 0;
    }
    return cart;
}

export const addToCart = (productId, cartItems, setCartItems) => {
    const updatedCartItems = { ...cartItems };
    updatedCartItems[productId] = updatedCartItems[productId] + 1 || 1; //Update cart by incrementing target item's quantity
    setCartItems(updatedCartItems);
  };

export const removeFromCart = (productId, cartItems, setCartItems) => { //Update cart by decrementing target item's quantity
    const updatedCartItems = { ...cartItems };
    updatedCartItems[productId] = Math.max(0, updatedCartItems[productId] - 1);  
    setCartItems(updatedCartItems);
  };