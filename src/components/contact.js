import { useContext } from "react";
import UserContext from "../utils/userContext";
import Profile from "./profile";

const Contact = () => {
    const {user} = useContext(UserContext);
    return <div>This is Contact us 
        <p>{user.name}{user.email}</p>

        <UserContext.Consumer>
                {({user})=> (
                    <><h1>{user.name}</h1><h1>{user.email}</h1></>
                )}
            </UserContext.Consumer>
        <Profile/>
    </div>;
}

export default Contact;