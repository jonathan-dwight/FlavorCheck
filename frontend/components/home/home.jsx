import React from "react";
import { Link, Redirect } from "react-router-dom";
import FollowingName from "./following_name"
import FlavortownIndexItem from "../flavortown/flavortown_index_item"

class Home extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchBurgers();
        window.scrollTo(0, 0);
    }

  

    render() {

        const burgerForm = (
            <button onClick={() => this.props.openModal('burger')}
            className="burger-form">ADD A FLAVOR</button>
            );
            
            
        const following = [];
        following.push(this.props.currentUser.id)
        this.props.followers.forEach((el) => {
            following.push(el.followeeId)
            if (!following.includes(el.followerId)) {
                following.push(el.followerId)
            }
        })
        
        const followingBurgers = [];
        this.props.burgers.forEach((el) => {
            if (following.includes(el.authorId)) {
                    followingBurgers.push(el)
            }
        })
        
        let headerText;
        if (followingBurgers.length === 0) {
            headerText = 
            <div className="header-text-default">
                <p>
                    WELCOME TO FLAVORCHECK!! You are currently not following anyone,
                    please checkout Flavor Town to join the community. FLAVORS ARE WAITING!!
                </p>
                <img className="header-text-image" src={window.coverphoto} />
            </div>
        } else {
            headerText = null;
        }
        
       
        let that = this.props.users
        let followingNames;

        if (this.props.followers.length > 0 && Object.values(this.props.users).length > 1) {
            followingNames = this.props.followers.map((el) => {
                return <FollowingName  
                        key={el.id} 
                        deleteFollow={this.props.deleteFollow}
                        following_arr={this.props.followers}
                        name={that[el.followeeId].username} 
                        user={el}/>
            })
        }



        const burgers = followingBurgers.map((el) => {
            return <FlavortownIndexItem key={el.id}
                burger={el} restaurants={this.props.restaurants} 
                users={this.props.users}
                currentUser={this.props.currentUser}
                deleteBurger={this.props.deleteBurger} 
                openModal={this.props.openModal}
                following={following}
                following_arr={this.props.followers}
                deleteFollow={this.props.deleteFollow}/>
        })


        let numPosts = 0;
        for (let i = 0; i < this.props.burgers.length; i++) {
            if (this.props.burgers[i].authorId === this.props.sessionId) {
                numPosts += 1
            }
        }

        let numFollowers = this.props.followers.length;

        let currentName;
        (this.props.currentUser) ? currentName = this.props.currentUser.name : currentName = null;
        
        let currentUserName;
        (this.props.currentUser) ? currentUserName = this.props.currentUser.username : currentUserName = null;

        let profilePic;
        if (this.props.currentUser.photo) {
            profilePic = <img src={this.props.currentUser.photo} className="avatar-review" />
        } else {
            profilePic = <img src={window.avatar} className="avatar-review" htmlFor="file" />
        }

        return (
            <div className="home-container">
                <div className="home-content">
                    <div className="home-header">
                        <h3 className="home-header-text">Following FlavorChecks</h3>
                        {burgerForm}
                    </div>
                    <div className="home-review-container">
                        {headerText}
                        {burgers}
                    </div>
                </div>
                <div className="left-home-box">
                    <ul className="profile-list">
                        <div className="box">
                            <div className="profile-username">
                                {profilePic}
                                <div className="box-username">
                                    <h2>{currentName}</h2>
                                    <p>{currentUserName}</p>
                                </div>
                            </div>
                            <div className="box-of-badges">
                                <Link to={`/profile/${this.props.currentUser.id}`}>
                                    <div className="inner-box">
                                            <p className="number-text">{numPosts}</p>
                                            <p className="small-text">FlavorChecks</p>
                                    </div>
                                </Link>
                                <Link to={`/profile/${this.props.currentUser.id}`}>
                                    <div className="inner-box">
                                            <p className="number-text">{numFollowers}</p>
                                            <p className="small-text">Following</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </ul>

                    <div className="following-names-container">
                        <div className="following-box">
                            <h2>Users Following</h2>
                            {followingNames}
                        </div>

                    </div>
                </div>
            </div>
        )
    }

}

export default Home;

