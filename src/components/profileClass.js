import React from "react";



class ProfileClass extends React.Component {

    constructor(props){
        super(props);
        this.state ={
            count:0
        }
        console.log("Profile constructor - "+this.props.name+" render phase");
    }
    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/siva555git");
        const parsedData = await data.json();
        this.setState({
            userinfo : parsedData
        })

        this.timer = setInterval(()=>{
            console.log("Timing starts");
        }, 1000)
        console.log("Profile componentDidMount - "+this.props.name+" commit phase");
    }

    componentDidUpdate(){
        console.log("Profile componentDidUpdate - "+this.props.name+" Updating phase");
    }

    componentWillUnmount(){
        clearInterval(this.timer);
        console.log("Profile componentWillUnmount - "+this.props.name+" unmount phase");
    }
    render(){   
        console.log("Profile render method - "+this.props.name+" render phase");
        console.log(this.state);
        return (
        <div>
            <h1>NEW Class profile</h1>
            {/* <h1>count: {this.state.count}</h1>
            <button onClick={() =>{ this.setState({count:2})}}>Click </button> */}
            <h1>Name: {this.state?.userinfo?.login}</h1>
            <h1>ID: {this.state?.userinfo?.id}</h1>
            <h1>Img: <img src={this.state?.userinfo?.avatar_url}></img></h1>
        </div>)
    }
}

export default ProfileClass