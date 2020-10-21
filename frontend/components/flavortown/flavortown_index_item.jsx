import React from "react"
import { Link } from "react-router-dom"


class FlavorTownIndexItem extends React.Component {
    constructor(props) {
        super(props)
        this.removeeFollow = this.removeFollow.bind(this)
    }
    
    removeFollow(followeeId) {
        let id;
        for (let i = 0; i < this.props.following_arr.length; i++) {
            if (this.props.following_arr[i].followeeId === followeeId) {
                id = this.props.following_arr[i].id
            }
        }
        this.props.deleteFollow(id)
    }

    render() {
        let user = this.props.users[this.props.burger.authorId]
        let restaurant = this.props.restaurants[this.props.burger.restaurantId]
    
        let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    
        let year = this.props.burger.createdAt.slice(0,4)
        let month = months[(this.props.burger.createdAt.slice(5,7)) -1]
        let day = this.props.burger.createdAt.slice(8,10)
    
        let ratings = [];
        for(let i = 0; i < this.props.burger.rating; i++) {
            ratings.push(<span key={i} className="fa fa-star checked"></span>)
        }
    
        let nonCheck = 5 - this.props.burger.rating
        let nonCheckArr = [];
        for (let i = 0; i < nonCheck; i++) {
            nonCheckArr.push(<span key={i} className="fa fa-star"></span>)
        }
    
        let image;
        (this.props.burger.photo) ? image = <img className="burger-image" src={this.props.burger.photo}/> 
        : image = null;
    
        let currentUser;
        (this.props.currentUser) ? currentUser = this.props.currentUser.id : currentUser = null;
    
        let deleteButton;
        (this.props.burger.authorId === currentUser) ? (
            deleteButton = <p onClick={() => this.props.openModal('delete',this.props.burger.id)} className="delete">Delete FlavorCheck</p>
        ) : (
            deleteButton = null
        )
           
        let followingButton;
        if (this.props.following.includes(this.props.burger.authorId) && (currentUser === this.props.burger.authorId)) {
            followingButton = null;
        } else if (this.props.following.includes(this.props.burger.authorId)) {
            followingButton = 
            <p className="follow-button" onClick={() => this.removeFollow(this.props.burger.authorId)}>unfollow {user.username} </p>

        } else {
          followingButton = 
          <p className="follow-button" onClick={() => this.props.createFollow(currentUser, this.props.burger.authorId)}>follow {user.username} </p>
        }
    
    
        return (
            <div className="global-review"> 
                <div className="review-title">
                    <img src={window.avatar} className="avatar-review"/>
                    <div className="review-text">
                        <span className="burger-name-restaurant">{user.username}&nbsp;</span> 
                        is&nbsp;eating&nbsp;a&nbsp; 
                        <p className="burger-name-restaurant">{this.props.burger.name}&nbsp;</p> 
                        from&nbsp;
                        <Link to={`restaurant/${restaurant.id}`} className="burger-name-restaurant-link">{restaurant.name}</Link>
                        {/* HAVE TO THINK IF I NEED A RESTAURANT SHOW PAGE */}
                    </div>
                </div>
                
                <div className="review-box">
                    <div className="quote-square"></div> 
                    
                    <div className="content">
                        <h2>{this.props.burger.description}</h2>
    
                        <div className="star-rating">
                            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                            {ratings.map((el) => (el))}
                            {nonCheckArr.map((el) => (el))}
                        </div>
    
                    </div>
                    {image}
                    <div className="bottom-review">
                        <p className="date">{year} {month} {day}</p>
                        {deleteButton}
                        {followingButton}
                    </div>
                </div>
            </div>
        )

    }
}

export default FlavorTownIndexItem;



