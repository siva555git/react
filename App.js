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

import { createElement as cs } from "react";
import  ReactDOM  from "react-dom/client";


const RestaurantList = [
    {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "323794",
          "name": "Coolcat Pure Veg - Reddiyarpalayam",
          "uuid": "517434eb-c649-47e7-87f2-82ff2c578337",
          "city": "43",
          "area": "Puducherry",
          "totalRatingsString": "5000+ ratings",
          "cloudinaryImageId": "ozbkdzonso9omhlfukto",
          "cuisines": [
            "South Indian",
            "Chinese",
            "North Indian",
            "Tandoor"
          ],
          "tags": [
            
          ],
          "costForTwo": 20000,
          "costForTwoString": "₹200 FOR TWO",
          "deliveryTime": 22,
          "minDeliveryTime": 22,
          "maxDeliveryTime": 22,
          "slaString": "22 MINS",
          "lastMileTravel": 1.399999976158142,
          "slugs": {
            "restaurant": "cool-cat-pure-veg---reddiyarpalayam-white-town-white-town",
            "city": "pondicherry"
          },
          "cityState": "43",
          "address": "DEVAOLI, S/O. THANDAVAM, NO.25, VILLIANUR ROAD, VICTORIA NAGAR, PUDUCHERRY",
          "locality": "Villianur",
          "parentId": 16995,
          "unserviceable": false,
          "veg": true,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [
            
          ],
          "aggregatedDiscountInfo": {
            "header": "FLAT ₹125 off",
            "shortDescriptionList": [
              {
                "meta": "FLAT ₹125 off | Use FLATDEAL",
                "discountType": "Flat",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "FLAT ₹125 off on orders above ₹249 | Use code FLATDEAL",
                "discountType": "Flat",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "aggregatedDiscountInfoV2": {
            "header": "₹125 OFF",
            "shortDescriptionList": [
              {
                "meta": "Use FLATDEAL",
                "discountType": "Flat",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "FLAT ₹125 off on orders above ₹249 | Use code FLATDEAL",
                "discountType": "Flat",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "ribbon": [
            {
              "type": "PROMOTED"
            }
          ],
          "chain": [
            
          ],
          "feeDetails": {
            "fees": [
              {
                "name": "distance",
                "fee": 1900,
                "message": ""
              },
              {
                "name": "time",
                "fee": 0,
                "message": ""
              },
              {
                "name": "special",
                "fee": 0,
                "message": ""
              }
            ],
            "totalFees": 1900,
            "message": "",
            "title": "Delivery Charge",
            "amount": "1900",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "cid=6025247~p=1~eid=00000186-fa9f-0dfa-1c29-919900860137",
          "badges": {
            "imageBased": [
              
            ],
            "textBased": [
              
            ],
            "textExtendedBadges": [
              
            ]
          },
          "lastMileTravelString": "1.3 kms",
          "hasSurge": false,
          "sla": {
            "restaurantId": "323794",
            "deliveryTime": 22,
            "minDeliveryTime": 22,
            "maxDeliveryTime": 22,
            "lastMileTravel": 1.399999976158142,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": true,
          "avgRating": "4.1",
          "totalRatings": 5000,
          "new": false
        },
        "subtype": "basic"
      },
      {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "82572",
          "name": "Banana Leaf ",
          "uuid": "48c3b530-4432-4ee9-9f3e-6c30277049e0",
          "city": "43",
          "area": "Puducherry",
          "totalRatingsString": "10000+ ratings",
          "cloudinaryImageId": "v7msadjrhhu6p1dbg29l",
          "cuisines": [
            "Indian",
            "Arabian",
            "Chinese",
            "Biryani",
            "Tandoor"
          ],
          "tags": [
            
          ],
          "costForTwo": 30000,
          "costForTwoString": "₹300 FOR TWO",
          "deliveryTime": 26,
          "minDeliveryTime": 26,
          "maxDeliveryTime": 26,
          "slaString": "26 MINS",
          "lastMileTravel": 0.800000011920929,
          "slugs": {
            "restaurant": "banana-leaf-barbeque-restaurant-mg-road-white-town",
            "city": "pondicherry"
          },
          "cityState": "43",
          "address": "no.192,kamarajar salai,saram,puducherry-605013",
          "locality": "Heritage Town",
          "parentId": 1285,
          "unserviceable": false,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [
            
          ],
          "aggregatedDiscountInfo": {
            "header": "FLAT ₹125 off",
            "shortDescriptionList": [
              {
                "meta": "FLAT ₹125 off | Use FLATDEAL",
                "discountType": "Flat",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "FLAT ₹125 off on orders above ₹249 | Use code FLATDEAL",
                "discountType": "Flat",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "aggregatedDiscountInfoV2": {
            "header": "₹125 OFF",
            "shortDescriptionList": [
              {
                "meta": "Use FLATDEAL",
                "discountType": "Flat",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "FLAT ₹125 off on orders above ₹249 | Use code FLATDEAL",
                "discountType": "Flat",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "chain": [
            
          ],
          "feeDetails": {
            "fees": [
              {
                "name": "distance",
                "fee": 1900,
                "message": ""
              },
              {
                "name": "time",
                "fee": 0,
                "message": ""
              },
              {
                "name": "special",
                "fee": 0,
                "message": ""
              }
            ],
            "totalFees": 1900,
            "message": "",
            "title": "Delivery Charge",
            "amount": "1900",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "",
          "badges": {
            "imageBased": [
              
            ],
            "textBased": [
              
            ],
            "textExtendedBadges": [
              
            ]
          },
          "lastMileTravelString": "0.8 kms",
          "hasSurge": false,
          "sla": {
            "restaurantId": "82572",
            "deliveryTime": 26,
            "minDeliveryTime": 26,
            "maxDeliveryTime": 26,
            "lastMileTravel": 0.800000011920929,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": false,
          "avgRating": "3.7",
          "totalRatings": 10000,
          "new": false
        },
        "subtype": "basic"
      },
      {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "405887",
          "name": "Copper Kitchen",
          "uuid": "44bffd5f-6019-4c8e-b17a-150d32866e0e",
          "city": "43",
          "area": "Puducherry",
          "totalRatingsString": "5000+ ratings",
          "cloudinaryImageId": "ousftkkaojw0itx4u3tw",
          "cuisines": [
            "Biryani",
            "Barbecue",
            "Chettinad",
            "Chinese"
          ],
          "tags": [
            
          ],
          "costForTwo": 50000,
          "costForTwoString": "₹500 FOR TWO",
          "deliveryTime": 23,
          "minDeliveryTime": 23,
          "maxDeliveryTime": 23,
          "slaString": "23 MINS",
          "lastMileTravel": 1,
          "slugs": {
            "restaurant": "copper-kitchen-white-town-white-town",
            "city": "pondicherry"
          },
          "cityState": "43",
          "address": "No 73 100ft Road,Ellaipillai Chavadi,Puducheery Urban,Puducheery 605005",
          "locality": "Gandhinagar",
          "parentId": 1877,
          "unserviceable": false,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [
            
          ],
          "aggregatedDiscountInfo": {
            "header": "FLAT ₹125 off",
            "shortDescriptionList": [
              {
                "meta": "FLAT ₹125 off | Use FLATDEAL",
                "discountType": "Flat",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "FLAT ₹125 off on orders above ₹249 | Use code FLATDEAL",
                "discountType": "Flat",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "aggregatedDiscountInfoV2": {
            "header": "₹125 OFF",
            "shortDescriptionList": [
              {
                "meta": "Use FLATDEAL",
                "discountType": "Flat",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "FLAT ₹125 off on orders above ₹249 | Use code FLATDEAL",
                "discountType": "Flat",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "chain": [
            
          ],
          "feeDetails": {
            "fees": [
              {
                "name": "distance",
                "fee": 1900,
                "message": ""
              },
              {
                "name": "time",
                "fee": 0,
                "message": ""
              },
              {
                "name": "special",
                "fee": 0,
                "message": ""
              }
            ],
            "totalFees": 1900,
            "message": "",
            "title": "Delivery Charge",
            "amount": "1900",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "",
          "badges": {
            "imageBased": [
              
            ],
            "textBased": [
              
            ],
            "textExtendedBadges": [
              
            ]
          },
          "lastMileTravelString": "1 kms",
          "hasSurge": false,
          "sla": {
            "restaurantId": "405887",
            "deliveryTime": 23,
            "minDeliveryTime": 23,
            "maxDeliveryTime": 23,
            "lastMileTravel": 1,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": false,
          "avgRating": "4.1",
          "totalRatings": 5000,
          "new": false
        },
        "subtype": "basic"
      },
      {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "68195",
          "name": "Dindigul Thalappakatti",
          "uuid": "d54a5b2c-a094-4df6-8c30-ef844ccc9327",
          "city": "43",
          "area": "Puducherry",
          "totalRatingsString": "10000+ ratings",
          "cloudinaryImageId": "w0fc1sr85flnqzb7qhma",
          "cuisines": [
            "Biryani",
            "Barbecue",
            "South Indian",
            "Chinese",
            "North Indian"
          ],
          "tags": [
            
          ],
          "costForTwo": 50000,
          "costForTwoString": "₹500 FOR TWO",
          "deliveryTime": 29,
          "minDeliveryTime": 29,
          "maxDeliveryTime": 29,
          "slaString": "29 MINS",
          "lastMileTravel": 2.200000047683716,
          "slugs": {
            "restaurant": "dindigul-thalappakatti-lawspet-big-bazar-road",
            "city": "pondicherry"
          },
          "cityState": "43",
          "address": "D.NO.108, Kamaraj Salai, Near Balaji Theatre, Brindavan Colony, Puducherry, 605011, India",
          "locality": "Lawspet",
          "parentId": 332,
          "unserviceable": false,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [
            
          ],
          "aggregatedDiscountInfo": {
            "header": "Flat ₹125 off",
            "shortDescriptionList": [
              {
                "meta": "Flat ₹125 off on orders above ₹199",
                "discountType": "Flat",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "Flat ₹125 off on orders above ₹199 | Use code SWIGGYWEEKENDS",
                "discountType": "Flat",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "aggregatedDiscountInfoV2": {
            "header": "₹125 OFF",
            "shortDescriptionList": [
              {
                "meta": "Use SWIGGYWEEKENDS",
                "discountType": "Flat",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "Flat ₹125 off on orders above ₹199 | Use code SWIGGYWEEKENDS",
                "discountType": "Flat",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "ribbon": [
            {
              "type": "PROMOTED"
            }
          ],
          "chain": [
            
          ],
          "feeDetails": {
            "fees": [
              {
                "name": "distance",
                "fee": 1900,
                "message": ""
              },
              {
                "name": "time",
                "fee": 0,
                "message": ""
              },
              {
                "name": "special",
                "fee": 0,
                "message": ""
              }
            ],
            "totalFees": 1900,
            "message": "",
            "title": "Delivery Charge",
            "amount": "1900",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "cid=6225511~p=4~eid=00000186-fa9f-0dfa-1c29-919a00860423",
          "badges": {
            "imageBased": [
              
            ],
            "textBased": [
              
            ],
            "textExtendedBadges": [
              
            ]
          },
          "lastMileTravelString": "2.2 kms",
          "hasSurge": false,
          "sla": {
            "restaurantId": "68195",
            "deliveryTime": 29,
            "minDeliveryTime": 29,
            "maxDeliveryTime": 29,
            "lastMileTravel": 2.200000047683716,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": true,
          "avgRating": "3.8",
          "totalRatings": 10000,
          "new": false
        },
        "subtype": "basic"
      },
      {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "78970",
          "name": "Surguru",
          "uuid": "b9ce0840-09d4-4d44-b073-3189fe53039c",
          "city": "43",
          "area": "Puducherry",
          "totalRatingsString": "10000+ ratings",
          "cloudinaryImageId": "zw7dduin6k2lgwcwus9z",
          "cuisines": [
            "South Indian",
            "North Indian"
          ],
          "tags": [
            
          ],
          "costForTwo": 25000,
          "costForTwoString": "₹250 FOR TWO",
          "deliveryTime": 26,
          "minDeliveryTime": 26,
          "maxDeliveryTime": 26,
          "slaString": "26 MINS",
          "lastMileTravel": 1,
          "slugs": {
            "restaurant": "surguru-gandhinagar-big-bazar-road",
            "city": "pondicherry"
          },
          "cityState": "43",
          "address": "100 Feet Road, Thanthai Periyar Nagar, Ellaipillaichavady, Near Gandhinagar, Puducherry",
          "locality": "Gandhinagar",
          "parentId": 6369,
          "unserviceable": false,
          "veg": true,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [
            
          ],
          "chain": [
            
          ],
          "feeDetails": {
            "fees": [
              {
                "name": "distance",
                "fee": 1900,
                "message": ""
              },
              {
                "name": "time",
                "fee": 0,
                "message": ""
              },
              {
                "name": "special",
                "fee": 0,
                "message": ""
              }
            ],
            "totalFees": 1900,
            "message": "",
            "title": "Delivery Charge",
            "amount": "1900",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "",
          "badges": {
            "imageBased": [
              
            ],
            "textBased": [
              
            ],
            "textExtendedBadges": [
              
            ]
          },
          "lastMileTravelString": "1 kms",
          "hasSurge": false,
          "sla": {
            "restaurantId": "78970",
            "deliveryTime": 26,
            "minDeliveryTime": 26,
            "maxDeliveryTime": 26,
            "lastMileTravel": 1,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": false,
          "avgRating": "4.3",
          "totalRatings": 10000,
          "new": false
        },
        "subtype": "basic"
      },
]

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

const Title  = () =>{ 
    return <a href="/" className="logo"><img alt="logo" src="https://yt3.googleusercontent.com/ytc/AL5GRJXudT76175T4x4n7eslWM1YkgNLHDSSqfXGoadl=s176-c-k-c0x00ffffff-no-rj"/></a>
};


const Header = () => {
    return (
        <div className="header">
            <Title/>
            <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Contact us</li>
            </ul>
            </div>
        </div>
    )
}
const RestoCard = (id,{name,area,cuisines,cloudinaryImageId}) =>{
    // { console.log(restaurant) }
   return  <div className="Resto">
        <img src= {"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + cloudinaryImageId} />
        <h1> {name} </h1>
        <h2> {area} </h2>
        <h3> {cuisines.join(",")} </h3>
        <h3> {id} </h3>
    </div>
}
const Body = () => {
    return (<div className="Restaurant">
        {RestaurantList.map((Restaurant) => {
            console.log({...Restaurant?.data});
            return <RestoCard id ={Restaurant.data.uuid} {...Restaurant?.data} key = {Restaurant.data.uuid}/>
        })}
    </div>)
}

const Footer = () => {
    return <h4>Footer</h4>
}

const AppLayout = () => {
    return (
        <>
            <Header/>
            <Body/>
            <Footer/>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

//async defer
root.render(<AppLayout/>);