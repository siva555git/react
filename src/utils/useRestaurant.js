import { useState, useEffect } from "react";
import { SWIGGY_MENU_URL }  from "../constants";

const useRestaurant = (id) => {
    const [restaurantMenu, setRestaurantMenu] = useState();
    useEffect(() =>{
        fetchRestaurantMenu();
    }, [])
    

    async function fetchRestaurantMenu(){
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=11.895165020665033&lng=79.80382584035397&restaurantId="+id);
        const json = await data.json();
        setRestaurantMenu(json?.data?.cards[0]?.card?.card?.info)
        console.log(json);
    }

    return restaurantMenu;

}

export default useRestaurant;