import React from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/userContext";
import Profile from "./profile";
import ProfileClass from "./profileClass";
// const About = () => {
//     return (<div>This is about us 
//         <ProfileClass name={"siva"}/>
//         </div>);
// }

class About extends React.Component{
    constructor(props){
        super(props)
        console.log("About us constructor - Parent render phase");

    }
    componentDidMount(){
        console.log("About us componentDidMount - Parent commit phase");
    }
    render(){
        console.log("About us render method - Parent render phase");
        return <div>

            <UserContext.Consumer>
                {({user})=> (
                    <><h1>In about us</h1><h1>{user.name}</h1><h1>{user.email}</h1></>
                )}
            </UserContext.Consumer>
            <h1>About us Parent component</h1>
            <ProfileClass name={"Child1"}/>
            <ProfileClass name={"Child2"}/>
        </div>
    }
}

export default About;