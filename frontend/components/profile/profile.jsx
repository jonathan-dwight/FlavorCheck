import React from "react"
import FlavortownIndexItem from "../flavortown/flavortown_index_item"
import RestaurantIndexItem from "../flavortown/restaurant_index_item"

class Profile extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            imageFile: null,
            imageUrl: null
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handlePhotoInput = this.handlePhotoInput.bind(this)
    }

    componentDidMount() {
        this.props.fetchBurgers();
        this.props.fetchUser(this.props.match.params.userId)
        window.scrollTo(0, 0);
    }

    handlePhotoInput(e) {
        const reader = new FileReader();
        const file = e.currentTarget.files[0];
        reader.onloadend = () => {
            this.setState({ imageUrl: reader.result, imageFile: file });
        }
        if (file) {
            reader.readAsDataURL(file);
        } else {
            this.setState({ imageUrl: "", imageFile: null });
        }
    }


    handleSubmit(e) {
        e.preventDefault()
        const formData = new FormData();
        if (this.state.imageFile) {
            formData.append('user[photo]', this.state.imageFile);
        }
        this.props.updateUser(this.props.currentUser.id, formData).then(() => {
            console.log("Update Worked!")
        }).fail(() => { console.log("Not it Did Not")})
    }

    render() {
        if (this.props.burgers === null) return null
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

        let headerText;
        if (createdBurgers.length === 0) {
            headerText =
                <div className="burger-text-default">
                    <p>
                        You dont have any post yet! Add a flavor and let the community
                        know what you your flavorchecking!
                </p>
                <img className="burger-text-image" src={window.burgerking} />
                </div>
        } else {
            headerText = null;
        }

        const restaurantId = [];
        createdBurgers.forEach((el) => {
            restaurantId.push(el.restaurantId)
        })

        const restaurantReview = this.props.restaurantList.map((el) => {
            if (restaurantId.includes(el.id)) {
                return <RestaurantIndexItem key={el.id} restaurant={el} />
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

        let profilePic; 

        if (this.state.imageUrl) {
            
            profilePic = <img src={this.state.imageUrl} className="add-picture" htmlFor="file"/>
        } else {
            
            if (this.props.currentUser.photo) {
                profilePic = <img src={this.props.currentUser.photo} className="add-picture" />
            } else {
                profilePic = <img src={window.avatar} className="add-picture" htmlFor="file" />
            }
        }
        
        return (
            <div className="profile-container">
                <div className="profile-header-container">
                    <img src={window.profilecover}/>
                    <div className="profile-header">

                        {/* PHOTO FOR THE PROFILE PICTURE */}
                        <div className="picture-box">
                            <input type="file" name="file" id="file" onChange={this.handlePhotoInput} className="label-file" />
                            <label htmlFor="file">
                                {profilePic}
                            </label>
                        {/* <button onClick={this.handleSubmit}>Change Profile Picture</button> */}
                        </div>
                        
                        
                        <div className="profile-header-text">
                            <h2>{this.props.currentUser.name}</h2>
                            <p>{this.props.currentUser.username}</p>
                        </div>
                    </div>
                    <div className="profile-header-bottom">
                        <p className="profile-header-bottom-text-1">{createdBurgers.length} Total</p>
                        <p className="profile-header-bottom-text-2">{this.props.followers.length} Following</p>
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
                                {headerText}
                                {burgers}
                            </div>
                        </div>
                    <div className="left-home-box">
                        <div className="burger-joints-container">
                            <div className="burger-joints-box">
                                <h2>Burger Joints You Reviewed</h2>
                                {restaurantReview}
                            </div>
                        </div>
                        <div className="description-side-box">
                            <h2>Burger Events Near You</h2>
                            <a href="https://www.lamag.com/bbb/" target="_blank">
                                <p className="burger-event-text">Burgers Bourbon + Beer</p>
                                <p className="burger-event-text-inner">October 27 - October 28</p>
                            </a>
                            <a href="https://www.winela.com/calendar/the-burger-battle"
                                target="_blank">
                                <p className="burger-event-text">The Burger Battle</p>
                                <p className="burger-event-text-inner">November 2</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        ) 
    }

}


export default Profile;