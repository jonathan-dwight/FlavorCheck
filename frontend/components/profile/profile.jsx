import React from "react"

class Profile extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchUser(this.props.match.params.userId)
    }

    render() {
        
        let user;
        (this.props.user) ? user = this.props.user : user = null

        return (
            <div className="profile-container">
                <div className="profile-header-container">
                    <img src={window.profilecover}/>
                    <div className="profile-header">
                        <img src={window.avatar} />
                        <div className="profile-header-text">
                            <h2>{user.name}</h2>
                            <p>{user.username}</p>
                        </div>
                    </div>
                    <div className="profile-header-bottom">
                        <p className="profile-header-bottom-text-1">2 Total</p>
                        <p className="profile-header-bottom-text-2">2 Following</p>
                        <p className="profile-header-bottom-text-2">2 Followers</p>
                    </div>
                </div>

                <div className="profile-bottom-container">
                    <div className="burger-post-container">

                    </div>

                    <div className="description-side-box">

                    </div>
                </div>
            </div>

        ) 
    }

}


export default Profile;