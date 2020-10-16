import React from "react"

const FlavorTownIndexItem = (props) => {
    let user = props.users[props.burger.authorId]
    let restaurant = props.restaurants[props.burger.restaurantId]

    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

    let year = props.burger.createdAt.slice(0,4)
    let month = months[(props.burger.createdAt.slice(5,7)) -1]
    let day = props.burger.createdAt.slice(9,10)

    return (
        <div className="global-review"> 
            <div className="review-title">
                <img src={window.avatar} className="avatar-review"/>
                <div className="review-text">
                    <span className="burger-name-restaurant">{user.username}&nbsp;</span> 
                    is&nbsp;eating&nbsp;a&nbsp; 
                    <p className="burger-name-restaurant">{props.burger.name}&nbsp;</p> 
                    from
                    <span className="burger-name-restaurant">&nbsp;{restaurant.name}</span>
                </div>
            </div>
            
            <div className="review-box">
                <div className="quote-square"></div> 
                
                <div className="content">
                    <h2>{props.burger.description}</h2>
                    <p>{props.burger.rating}</p>
                </div>
                {/* this would be burger post image*/}
                <img className="burger-image" src={window.mcdouble}/>
                <p className="date">{year} {month} {day}</p>
            </div>
        </div>
    )
}

export default FlavorTownIndexItem;



