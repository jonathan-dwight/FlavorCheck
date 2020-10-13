import React from "react";
import { Link, Redirect } from "react-router-dom";

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.props.logout()
        this.props.history.push("/")
    }

    render() {
        return (
            <>
                <h2>Welcome Back!! {this.props.user.username}</h2>
                <button onClick={this.handleClick}>Logout</button>
            </>
        )
    }
}

export default Home;