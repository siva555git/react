import {RestaurantList} from "../constants";
import {IMG_URL} from "../constants";
import {useEffect, useState} from "react";
import Shimmer  from "./shimmer";
import { Link } from "react-router-dom";


function filterRestaurant(searchText,restaurants){
    return restaurants.filter((rest) =>{
        return rest?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase());
    });
}

 


export const RestoCard = ({name,area,cuisines,cloudinaryImageId,id}) =>{
    
   return  <div className="Resto">
        <a>
            <Link to={"/restaurant/" + id} ><img src= {IMG_URL + cloudinaryImageId} /> 
            <h3> {name} </h3>
            <p> {area} </p>
            <p> {cuisines?.join(",")} </p>
            </Link>
        </a>
    </div>
}




export const Body = () => {
    const [searchText, setSearchText] = useState("");
    const [restaurants, setRestaurants] = useState([]);
    const [filteredRestaurants, setfilteredRestaurants] = useState([]);
    useEffect(() =>{
        fetchRestaurant();
    }, []);

    async function fetchRestaurant (){
        const data =  await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0825943&lng=80.2707234&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json);
        setRestaurants(json.data.cards[2]?.data?.data?.cards);
        setfilteredRestaurants(json.data.cards[2]?.data?.data?.cards);
    }

    return (restaurants.length === 0)? <><Shimmer/></> : (
        <>
        <div className="SearchText">
            <input
            value={searchText}
            onChange={(e) => {
                setSearchText(e.target.value);
            }}
            ></input>
            <button onClick={() => {
                const rest = filterRestaurant(searchText,restaurants);
                setfilteredRestaurants(rest);
            }}>Search</button>
        </div>
        <div className="Restaurant">
            {filteredRestaurants.map((Restaurant) => {
                return <RestoCard  {...Restaurant?.data} key = {Restaurant.data.uuid}/>
            })}
        </div>
    </>)
}

export default Body;