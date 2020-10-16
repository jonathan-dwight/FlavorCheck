import React from "react"

const FlavorTownIndexItem = (props) => {
    //need to know whow to users name and resturants
    return (
        <p>{props.burger.author_id.name} is eating a {props.burger.name}
            by 
        </p>
    )
}

export default FlavorTownIndexItem;