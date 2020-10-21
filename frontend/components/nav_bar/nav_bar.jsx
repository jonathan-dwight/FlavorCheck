import React from "react";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.props.logout()
        this.props.history.push("/")
    }

    render() {

        const unTappd = "https://untappd.com/"
        const linkedIn = "https://www.linkedin.com/in/jd-buendia-66ab7483/"
        const github = "https://github.com/jonathan-dwight"

        return (
            <>
                <div className="nav-bar">
                    <div className="left-header">
                        <Link to="/home">
                            <p className="flavor-check">FlavorCheck</p>
                        </Link>
                        <Link to="/flavortown">
                            <p className="flavor-town">Flavor Town</p>
                        </Link>
                        <a href={unTappd} target="_blank">
                            <p className="flavor-town">Untappd-Site</p>
                        </a>
                        <a href={linkedIn} target="_blank">
                            <p className="flavor-town">LinkedIn</p>
                        </a>
                        <a href={github} target="_blank">
                            <p className="flavor-town">Github</p>
                        </a>
                    </div>
                    <div className="right-header">
                        <Link to={`/profile/${this.props.user.id}`}>
                            <img src={window.avatar} className="avatar"/>
                        </Link>
                        <button onClick={this.handleClick} className="logout">Log Out</button>
                    </div>
                </div>
            </>
        )
    }
}

export default NavBar;