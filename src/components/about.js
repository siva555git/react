import React from "react";
import { Link } from "react-router-dom";
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
            <h1>About us Parent component</h1>
            <ProfileClass name={"Child1"}/>
            <ProfileClass name={"Child2"}/>
        </div>
    }
}

export default About;