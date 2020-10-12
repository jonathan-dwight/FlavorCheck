import React from "react";
import { Link } from "react-router-dom";

class Splash extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.props.logout()
    }

    render() {
        if (this.props.user) {
            return (
                <>
                    <h2>Welcome Back!! {this.props.user.username}</h2>
                    <button onClick={this.handleClick}>Logout</button>
                </>
            )
        } else {
            return (
                <>
                    <Link to={`/signup`}>
                        <button>Sign Up</button>
                    </Link>
                    <Link to={`/login`}>
                        <button>Login</button>
                    </Link>
                </>
            )
        }
    }
}

export default Splash;