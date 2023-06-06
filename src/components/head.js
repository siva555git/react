import { useContext, useState } from "react";
import logo from "../assets/logo.jpg";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/userContext";
import { useSelector } from "react-redux";

export const Title  = () =>{ 
    return <a href="/" className="logo"><img alt="logo" width="100" height="100" src={logo}/></a>
};


export const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const isOnline = useOnline();
    const {user} = useContext(UserContext);
    const cartItems = useSelector((store) => store.cart?.items);
    console.log("cartItems", cartItems);
    return (
        <div className="p-5 m-5 justify-between flex shadow-lg bg-orange-300">
            <Title/>
            <div className="mt-3">
            <ul className="flex p-3 m-3 space-x-8">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about_us">About us</Link></li>
                <li><Link to="/contact_us">Contact us</Link></li>
                <li><Link to="/instamart">Instamart</Link></li>
                <li><Link to="/cart">Cart {cartItems?.length}</Link></li>
            </ul>
            </div>
            <button className="p-3 m-0" onClick={() => {
                setIsLoggedIn(!isLoggedIn);
            }}><span>{user?.name}</span><span>{isOnline ? "Online": "Offline"}</span> {isLoggedIn ? "Login" : "Logout"}</button>
            
        </div>
    )
}