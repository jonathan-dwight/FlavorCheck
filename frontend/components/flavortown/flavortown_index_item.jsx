import React from "react"

const FlavorTownIndexItem = (props) => {
    let user = props.users[props.burger.author_id]
    let restaurant = props.restaurants[props.burger.restaurant_id]

    return (
        <div className="global-review"> 
            <div className="review-title">
                <span className="burger-name-restaurant">{user.username} </span> 
                is eating a 
                <span className="burger-name-restaurant"> {props.burger.name} </span> 
                from
                <span className="burger-name-restaurant"> {restaurant.name}</span>
            </div>
            <div class="quote-square"></div> 
            <div className="content">
            {/* ADD PICTURES */}
                <h2>{props.burger.description}</h2>
            </div>
        </div>
    )
}

export default FlavorTownIndexItem;

