import React from "react"
import { Link } from "react-router-dom"

const FlavorTownIndexItem = (props) => {
    let user = props.users[props.burger.authorId]
    let restaurant = props.restaurants[props.burger.restaurantId]

    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

    let year = props.burger.createdAt.slice(0,4)
    let month = months[(props.burger.createdAt.slice(5,7)) -1]
    let day = props.burger.createdAt.slice(8,10)

    let ratings = [];
    for(let i = 0; i < props.burger.rating; i++) {
        ratings.push(<span key={i} className="fa fa-star checked"></span>)
    }

    let nonCheck = 5 - props.burger.rating
    let nonCheckArr = [];
    for (let i = 0; i < nonCheck; i++) {
        nonCheckArr.push(<span key={i} className="fa fa-star"></span>)
    }

    let image;
    (props.burger.photo) ? image = <img className="burger-image" src={props.burger.photo}/> 
    : image = null;

    let currentUser;
    (props.currentUser) ? currentUser = props.currentUser.id : currentUser = null;

    let deleteButton;
    (props.burger.authorId === currentUser) ? (
        deleteButton = <p onClick={() => props.openModal('delete', props.burger.id)} className="delete">Delete FlavorCheck</p>
    ) : (
        deleteButton = null
    )

    return (
        <div className="global-review"> 
            <div className="review-title">
                <img src={window.avatar} className="avatar-review"/>
                <div className="review-text">
                    <span className="burger-name-restaurant">{user.username}&nbsp;</span> 
                    is&nbsp;eating&nbsp;a&nbsp; 
                    <p className="burger-name-restaurant">{props.burger.name}&nbsp;</p> 
                    from&nbsp;
                    <Link to={`restaurant/${restaurant.id}`} className="burger-name-restaurant-link">{restaurant.name}</Link>
                    {/* HAVE TO THINK IF I NEED A RESTAURANT SHOW PAGE */}
                </div>
            </div>
            
            <div className="review-box">
                <div className="quote-square"></div> 
                
                <div className="content">
                    <h2>{props.burger.description}</h2>

                    <div className="star-rating">
                        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                        {ratings.map((el) => (el))}
                        {nonCheckArr.map((el) => (el))}
                        {/* <p className="star-rating-number">({props.burger.rating}/5)</p> */}
                        {/* will check if i need something */}
                    </div>

                </div>
                {image}
                <div className="bottom-review">
                    <p className="date">{year} {month} {day}</p>
                    {deleteButton}
                </div>
            </div>
        </div>
    )
}

export default FlavorTownIndexItem;



