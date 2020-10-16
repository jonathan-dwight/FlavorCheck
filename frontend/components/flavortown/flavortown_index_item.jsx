import React from "react"

const FlavorTownIndexItem = (props) => {
    let user = props.users[props.burger.author_id]
    let restaurant = props.restaurants[props.burger.restaurant_id]

    return (
        <p> {user.username} is eating a {props.burger.name} by {restaurant.name}
        </p>
    )
}

export default FlavorTownIndexItem;