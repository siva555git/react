import { useState, useEffect } from "react";
import {SWIGGY_MENU_URL}  from "../constants"
const useRestaurant = (id) => {
    const [restaurantMenu, setRestaurantMenu] = useState();
    useEffect(() =>{
        fetchRestaurantMenu();
    }, [])
    

    async function fetchRestaurantMenu(){
        const data = await fetch(SWIGGY_MENU_URL+id);
        const json = await data.json();
        setRestaurantMenu(json?.data?.cards[0]?.card?.card?.info)
        console.log(json);
    }

    return restaurantMenu;

}

export default useRestaurant;