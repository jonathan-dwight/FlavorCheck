import React from "react"
import FlavortownIndexItem from "../flavortown/flavortown_index_item"

class Profile extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchUser(this.props.match.params.userId)
        this.props.fetchBurgers();
    }

    render() {
        
        const burgerForm = (
            <button onClick={() => this.props.openModal('burger')}
                className="burger-form">ADD A FLAVOR</button>
        );
    

        const following = [];
        this.props.followers.forEach((el) => {
            following.push(el.followeeId)
        })

        const createdBurgers = [];
        this.props.burgers.forEach((el) => {
            if (el.authorId === this.props.currentUser.id) {
                createdBurgers.push(el)
            }
        })

        const burgers = createdBurgers.map((el) => {
            return <FlavortownIndexItem key={el.id}
                burger={el} restaurants={this.props.restaurants} users={this.props.users}
                currentUser={this.props.currentUser}
                deleteBurger={this.props.deleteBurger}
                openModal={this.props.openModal}
                following={following}
                createFollow={this.props.createFollow}
                deleteFollow={this.props.deleteFollow}
                following_arr={this.props.followers} />
        })
        
        return (
            <div className="profile-container">
                <div className="profile-header-container">
                    <img src={window.profilecover}/>
                    <div className="profile-header">
                        <img src={window.avatar} />
                        <div className="profile-header-text">
                            <h2>{this.props.currentUser.name}</h2>
                            <p>{this.props.currentUser.username}</p>
                        </div>
                    </div>
                    <div className="profile-header-bottom">
                        <p className="profile-header-bottom-text-1">{createdBurgers.length} Total</p>
                        <p className="profile-header-bottom-text-2">2 Following</p>
                        <p className="profile-header-bottom-text-2">2 Followers</p>
                    </div>
                </div>

                <div className="profile-bottom-container">
                    <div className="burger-post-container">
                        <div className="global-header">
                            <h3 className="global-header-text">Your Recent FlavorChecks</h3>
                            {burgerForm}
                        </div>
                        <div className="global-review-container">
                            {burgers}
                        </div>
                    </div>
                    <div className="description-side-box">

                    </div>
                </div>
            </div>

        ) 
    }

}


export default Profile;