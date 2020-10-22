import React from "react";

class FollowingName extends React.Component {
    constructor(props) {
        super(props)
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
        if (!this.props) return null;
        return (
            <div className="tooltip">
                <button onClick={() => this.removeFollow(this.props.user.followeeId)} 
                className="tooltip-button">Unfollow {this.props.name}</button>
                
                <p className="following-name"> {this.props.name} </p>
            </div>
        )
    }
}

export default FollowingName;