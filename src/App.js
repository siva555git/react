/**
 * HMR - Hot Module replacement
 * File watcher algorithm - c++
 * Bundling 
 * minify
 * cleaning the code
 * dev abd production build 
 * super fast build algorithm
 * Image optimization
 * cache while development
 * compression
 * compatble with older version of browser
 * https on dev
 * port number management
 * consistent hashing algorithm
 * zero config
 * Transitive dependencies
 * Tree shaking Removing unwanted 
 */

import { createElement as cs, lazy, Suspense, useState } from "react";
import  ReactDOM  from "react-dom/client";
import {Header} from "./components/head";
import Body from "./components/body";
import About from "./components/about";
import Contact from "./components/contact";
import Error from "./components/error";
import Profile from "./components/profile";
import Shimmer from "./components/shimmer";
import Cart from "./components/cart";
import UserContext from "./utils/userContext";
import {
    createBrowserRouter,
    Outlet,
    RouterProvider,
  } from "react-router-dom";
import RestMenu from "./components/restmenu";
import { Provider } from "react-redux";
import Store from "./utils/store";



const heading = cs(
    "h1",
    {
        id :"title1",
        key: "h1",
    },
    "heading 1"
);


// React.createElement is giving object then into html puts into dom

// const heading2  = React.createElement(
//     "h1",
//     {
//         id :"title1",
//         key: "h2",
//     },
//     "heading 2"
// );

// const container  = React.createElement(
//     "div",
//     {
//         id :"container",
//         hello: "world",
//     },
//     [heading,heading2]
// );


// JSX use react.createElement behind the scene
const heading2 = (<h1 id="title" key="h1">
    Learn new</h1>);



var xyz = 10;

// React component 

// Functional  based component  - new
// class based component - old
// Function component 
// it is normal js function return js code

 /**
             * Header
             *  - Logo
             *  - Nav items
             *  = card
             * Body
             *  - search bar
             *  - Restro list
             *    - Restro card (All of resto card)
             *      - Image
             *      - Name
             *      - Rating
             *      - cusine
             * Footer
             *  - Links 
             *  - copyright
             */

const HeaderComp = () => {
    return (
        <div>
            {console.log(xyz)} 
            {heading2}
            {Title()}
            <h2>React component</h2>
            <h2>This is h2 tag</h2>
            </div>);
};

const headerCompNew = () => {
    (<div><h1>React component</h1><h2>This is h2 tag</h2></div>);
};


//const about = lazy(() => import("./components/About"));

const Instamart = lazy(() => import("./components/instamart"));


const Footer = () => {
    return <h4>Footer</h4>
}

const AppLayout = () => {

    const [user, setUser] = useState({
        name: "siva",
        email: "siva@gmail.com"
    });
    return (
        <>
        <Provider store={Store}>
            <UserContext.Provider value={{user, setUser}}>
            <Header/>
            <Outlet/>
            <Footer/>
            </UserContext.Provider>
        </Provider>
        </>
    )
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error/>,
        children:[
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/about_us",
                element: <About />,
                children:[
                    {
                        path: "profile", //if you add '/' in front of profile will consider localhost:1234/profile
                        element: <Profile />,
                    },
                ]
            },
            {
                path: "/contact_us",
                element: <Contact />,
            },
            {
                path: "/cart",
                element: <Cart />,
            },
            {
                path: "/restaurant/:id",
                element: <RestMenu />,
            },
            {
                path: "/instamart",
                element: <Suspense fallback={<Shimmer/>} ><Instamart /></Suspense>,
            }
        ]
    }
    ]);

const root = ReactDOM.createRoot(document.getElementById("root"));

//async defer
root.render(<RouterProvider router={router} />);