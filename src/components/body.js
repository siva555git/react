import {RestaurantList} from "../constants";
import {IMG_URL} from "../constants";
import {useContext, useEffect, useState} from "react";
import Shimmer  from "./shimmer";
import { Link } from "react-router-dom";
import { filterRestaurant } from "../utils/helper";
import UserContext from "../utils/userContext";



export const RestoCard = ({name,area,cuisines,cloudinaryImageId,id}) =>{
    const {user} = useContext(UserContext);
    console.log(user);    
   return  <div className="p-3 m-3 w-56 shadow-lg">
        <a>
            <Link to={"/restaurant/" + id} ><img src= {IMG_URL + cloudinaryImageId} /> 
            <h3 className="font-semibold p-1 m-1"> {name} </h3>
            <p className="font-extralight p-1 m-1"> {area} </p>
            <p className="font-extralight p-1 m-1 overflow-ellipsis overflow-hidden"> {cuisines?.join(",")} </p>
            <p className="font-extralight p-1 m-1">{user?.name}, {user?.email}</p> 
            </Link>
        </a>
    </div>
}




export const Body = () => {
    const [searchText, setSearchText] = useState("");
    const [restaurants, setRestaurants] = useState([]);
    const [filteredRestaurants, setfilteredRestaurants] = useState([]);
    const {user, setUser} = useContext(UserContext);
    console.log("fdfdfdf",{...user});
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

    return (restaurants?.length === 0)? <><Shimmer/></> : (
        <>
        <div className="m-5 bg-gray-50 text-center">
            <input className="m-2 p-2 w-80 border shadow"
            value={searchText}
            onChange={(e) => {
                setSearchText(e.target.value);
            }}  
            ></input>
            <input className="m-2 p-2 w-80 border shadow" onChange={(e) =>  setUser({...user, name:e.target.value})}>
            </input>
            <button className="m-2 p-2 bg-orange-300 text-white" onClick={() => {
                const rest = filterRestaurant(searchText,restaurants);
                setfilteredRestaurants(rest);
            }}>Search</button>
        </div>
        <div className="flex flex-wrap justify-center">
            {filteredRestaurants?.map((Restaurant) => {
                return <RestoCard  {...Restaurant?.data} key = {Restaurant.data.uuid}/>
            })}
        </div>
    </>)
}

export default Body;