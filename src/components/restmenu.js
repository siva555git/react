import { useParams } from "react-router-dom"
import {IMG_URL} from "../constants"
import Shimmer from "./shimmer";
import useRestaurant from "../utils/useRestaurant";

const RestMenu = () =>{
    const params = useParams();
    const restaurantMenu = useRestaurant(params.id);
    
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