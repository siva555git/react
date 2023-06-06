import { useDispatch, useSelector } from "react-redux";
import { IMG_URL } from "../constants";
// import { IMG_URL } from "../constants";
import { clearCart } from "../utils/cartslice";

const Fooditem = ({name,id,price,description,imageId}) => {
    return (
        <div>
            <h1>{name} {id}</h1>
            <img src={ IMG_URL + imageId}></img>
            <p>{description}</p>
            <span>{price}</span>
        </div>
    )
}
const Cart = () =>{
    const cartItems = useSelector((store) => store?.cart?.items);
    const dispatch = useDispatch();
    function handleClearCart(){
        dispatch(clearCart())
    }
    return (<div>
        <h1>cartItems {cartItems.length}</h1>
        <button onClick={()=> handleClearCart()} className="m-2 p-2 bg-orange-300 text-white">clearCart</button>
        cart
        <div>
            {cartItems.map((cartItem) => {
                return <Fooditem key={cartItem.id} {...cartItem} />
            })}
        </div>
       
        </div>)
}

export default Cart;