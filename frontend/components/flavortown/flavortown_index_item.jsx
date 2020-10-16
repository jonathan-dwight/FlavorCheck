import React from "react"

const FlavorTownIndexItem = (props) => {
    let user = props.users[props.burger.authorId]
    let restaurant = props.restaurants[props.burger.restaurantId]
    debugger
    return (
        <div className="global-review"> 
            <div className="review-title">
                <span className="burger-name-restaurant">{user.username} </span> 
                is eating a 
                <span className="burger-name-restaurant"> {props.burger.name} </span> 
                from
                <span className="burger-name-restaurant"> {restaurant.name}</span>
            </div>
            
            <div className="quote-square"></div> 
            
            <div className="content">
            {/* ADD PICTURES */}
                <p>{props.burger.rating}</p>
                <h2>{props.burger.description}</h2>
                {/* <Timestamp relative date={Date} /> */}
            </div>
        </div>
    )
}

export default FlavorTownIndexItem;

