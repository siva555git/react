import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import {IMG_URL} from "../constants"
import Shimmer from "./shimmer";
const RestMenu = () =>{
    const [restaurantMenu, setRestaurantMenu] = useState();
    useEffect(() =>{
        fetchRestaurantMenu();
    }, [])
    const params = useParams();

    async function fetchRestaurantMenu(){
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=11.895165020665033&lng=79.80382584035397&restaurantId="+params.id );
        const json = await data.json();
        setRestaurantMenu(json?.data?.cards[0]?.card?.card?.info)
        console.log(json);
    }

    
    return !restaurantMenu ? <Shimmer/> : (
        <div>
            <h1>RestaurantMenu id + {params.id}</h1>
            <h2>{restaurantMenu?.name}</h2>
            <img src={IMG_URL + restaurantMenu?.cloudinaryImageId} alt="" width={400} />
            <h1>Restaurant id: {restaurantMenu.name}</h1>
            <p>Area: {restaurantMenu.areaName}</p>
            <p>City: {restaurantMenu.city}</p>
            <p>Average Rating: {restaurantMenu.avgRating}</p>

            {/* <h4>Other Menu from {restaurantMenu.name}</h4> */}
            {/* This will Iterate a list of objects */}
            {/* <p>{
                Object.values(restaurantMenu.menu.items).map((item) => {
                    <li key={item.id}>{item.name}</li>
                })
            }</p> */}
        </div>
    )

}

export default RestMenu;