import { useState } from "react";
import logo from "../assets/logo.jpg";
import { Link } from "react-router-dom";

export const Title  = () =>{ 
    return <a href="/" className="logo"><img alt="logo" width="100" height="100" src={logo}/></a>
};


export const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    return (
        <div className="header">
            <Title/>
            <div className="nav-items">
            <ul>
                <li>Home</li>
                <li><Link to="/about_us">About us</Link></li>
                <li><Link to="/contact_us">Contact us</Link></li>
            </ul>
            </div>
            <button onClick={() => {
                setIsLoggedIn(!isLoggedIn);
            }}>{isLoggedIn ? "Login" : "Logout"}</button>
        </div>
    )
}