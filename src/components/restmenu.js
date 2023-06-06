import { useParams } from "react-router-dom"
import {IMG_URL, MOCK_MENU} from "../constants"
import Shimmer from "./shimmer";
import useRestaurant from "../utils/useRestaurant";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartslice";

const RestMenu = () =>{
    const params = useParams();
    const restaurantMenu = useRestaurant(params.id);
    const dispatch = useDispatch();
    function addMenuItem(item){
        dispatch(addItem(item));
    }
    console.log(MOCK_MENU);
    return !restaurantMenu ? <Shimmer/> : (
        <div className="m-5">
            <h1 className="text-lg font-bold">RestaurantMenu id  {params.id}</h1>
            <h2>{restaurantMenu?.name}</h2>
            <img src={IMG_URL + restaurantMenu?.cloudinaryImageId} alt="" width={400} />
            <h1>Restaurant id: {restaurantMenu.name}</h1>
            <p>Area: {restaurantMenu.areaName}</p>
            <p>City: {restaurantMenu.city}</p>
            <p>Average Rating: {restaurantMenu.avgRating}</p>
            <p className="text-lg font-bold"> Menus</p>
            <ul>{
                MOCK_MENU.map((item) => {
                    return <li key={item.id}><img src={IMG_URL + item.imageId}></img> 
                    <button onClick={() => addMenuItem(item)} className="m-2 p-2 bg-orange-300 text-white"> Add</button></li>
                })
            }</ul>

            {/* <h4>Other Menu from {restaurantMenu.name}</h4> */}
            {/* This will Iterate a list of objects */}
            {/* <p>{
                Object.values(restaurantMenu.menu.items).map((item) => {
                    <li key={item.id}>{item.name}</li>
                })
            }</p> */}

            <div className="m-5">
               
            </div>
        </div>
    )

}

export default RestMenu;