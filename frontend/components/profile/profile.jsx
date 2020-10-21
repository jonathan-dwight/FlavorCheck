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
            <>
                <div>{user.name}</div>
            </>
        ) 
    }

}


export default Profile;