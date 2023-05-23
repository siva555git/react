import { useState } from "react";

export const Section = ({sectionName, description, isVisible, setIsVisible}) => {
    // console.log(description);
    // const [visible, setVisible] = useState(true);
    return (
        <div className="m-5 p-5">
            <p className="text-lg font-medium">{sectionName}</p>
            {isVisible && <p>{description}</p>}
            <button className="bg-green-200 m-1 p2" onClick={() =>{
                setIsVisible(isVisible);
            }}>{isVisible ? "hide": "show"}</button>
        </div>
    )
};


const Instamart = () => {
    const [visibleSection, setVisibleSection] = useState("none");
    return (
        <div className="m-5 p-5">
            100 of components are there !!!!
            { /*<Section sectionname= "liyara"  description= "testingnew" props={{sectionname : "liayara", description: "testing"}} />*/ }
            <Section setIsVisible = { (isVisible) =>  isVisible? setVisibleSection("none"): setVisibleSection("about")} isVisible ={visibleSection === "about"} sectionName={"About Instamart"} description= {"Lorem ipsum dolor sit amet. Ut laborum voluptas cum necessitatibus quas in perferendis quia ut odit sint et enim laboriosam? Et corrupti adipisci et necessitatibus reprehenderit id iste nihil id placeat earum est asperiores quis et commodi internos est autem voluptatem. Qui veniam repudiandae et earum velit in repudiandae galisum."} />
            <Section setIsVisible = { (isVisible) => isVisible? setVisibleSection("none"): setVisibleSection("team")} isVisible ={visibleSection === "team"}  sectionName={"Team Instamart"} description= {"Lorem ipsum dolor sit amet. Ut laborum voluptas cum necessitatibus quas in perferendis quia ut odit sint et enim laboriosam? Et corrupti adipisci et necessitatibus reprehenderit id iste nihil id placeat earum est asperiores quis et commodi internos est autem voluptatem. Qui veniam repudiandae et earum velit in repudiandae galisum."} />
            <Section setIsVisible = { (isVisible) => isVisible? setVisibleSection("none"): setVisibleSection("careers")} isVisible ={visibleSection === "careers"} sectionName={"careers"} description= {"Lorem ipsum dolor sit amet. Ut laborum voluptas cum necessitatibus quas in perferendis quia ut odit sint et enim laboriosam? Et corrupti adipisci et necessitatibus reprehenderit id iste nihil id placeat earum est asperiores quis et commodi internos est autem voluptatem. Qui veniam repudiandae et earum velit in repudiandae galisum."} />
        </div>
    )
};

export default Instamart;
