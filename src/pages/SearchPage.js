import React, { useState, useContext } from 'react';
import { Product } from '../components/Product';
import './SearchPage.css';
import { PRODUCTS } from '../components/Products';
import {Link} from 'react-router-dom';


export const SearchPage = ({cartItems, setCartItems}) => {
  const [keyword, setKeyword] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchInputChange = (event) => {  
    setKeyword(event.target.value);
  };

  const handleSearchSubmit = (event)=> {  //Products with names that include the keyword will be found
    event.preventDefault();
    setSearchResults(
      PRODUCTS.filter(
        (product) =>
          product.name.toLowerCase().includes(keyword.toLowerCase())
      )
    );
  };

  return (
    <div className="search-page">
      <form onSubmit={handleSearchSubmit}>
        <div className="search-box">
          <input
            type="text"
            placeholder="Search products"
            value={keyword}
            onChange={handleSearchInputChange}
          />
          <button type="submit">Search</button>
        </div>
      </form>

      <div className="search-results">    
        {searchResults.map((product) => (
          <Link key={product.id} to={`/product/${product.id}`}>
          <Product key={product.id} product={product} cartItems={cartItems} 
          setCartItems={setCartItems} />
          </Link>
        ))}
      </div>
    </div>
  );
};