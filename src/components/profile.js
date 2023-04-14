import { useEffect, useState } from "react";

const Profile = () =>{
    const [profile, setProfile] = useState({});
    useEffect(() => {
        const timer = setInterval(()=>{
            console.log("Profile Timing starts");
        }, 1000)
        fetchGitProfile();

        // Use to unmount or clear value hear
        return () => {
                  clearInterval(timer);
                  console.log("useEffect Return");
         };
    }, []);
    async function fetchGitProfile(){
        const data = await fetch("https://api.github.com/users/siva555git");
        const parsedData = await data.json();
        setProfile(parsedData);
    }
    return <div>
        <h1>Function based fetch for profile</h1>
        <h1>Name: {profile?.login}</h1>
        <h1>Id: {profile?.id}</h1>
        <h1>Img: <img src={profile?.avatar_url}></img></h1>
    </div>
}

export default Profile;