import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
    return(
        <div className = "navbar">
            <div className = "links">
                <Link to="/"> Shop </Link>
                <Link to="/cart"> Cart </Link>
                <Link to="/search"> Search </Link>
            </div>
        </div>
    )
}