import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Shop } from "./pages/Shop";
import { ProductPage } from "./pages/ProductPage";
import { SearchPage } from "./pages/SearchPage";
import { Cart } from './pages/Cart';
import { addToCart, getDefaultCart } from './components/cart-functions';
import { Navbar } from "./components/Navbar";
import {ThankYouPage} from "./pages/ThankYouPage";

function App() {
  const [cartItems, setCartItems] =  useState(() => getDefaultCart());

  return (
    <div className="App">
      <Router>
          <Navbar />
          <Routes>

              <Route path="/" element={       //Main shop page
              <Shop addToCart={addToCart} 
              cartItems={cartItems} 
              setCartItems={setCartItems}/>}
              />

              <Route path="/cart" element={   //Cart page
              <Cart cartItems={cartItems} 
              setCartItems={setCartItems}/> }
              />

              <Route path="/product/:id" element={    //Product detail page
              <ProductPage 
              cartItems={cartItems} 
              setCartItems={setCartItems}/> } 
              /> 

              <Route path="/search" element={   //Search page
              <SearchPage cartItems={cartItems} 
              setCartItems={setCartItems}/> } 
              />

              <Route path="/thankyou" element={   //Thank you page
                <ThankYouPage/>}
              />
              
          </Routes>
      </Router>
    </div>
  );
}

export default App;

