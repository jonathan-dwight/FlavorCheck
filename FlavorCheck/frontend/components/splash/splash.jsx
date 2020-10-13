import React from "react";
import { Link, Redirect } from "react-router-dom";


class Splash extends React.Component {
    constructor(props) { 
        super(props)
    }

    render() {
        const sessionLinks = (
            <nav className="login-signup">
                <button onClick={() => this.props.openModal('login')} className="login-splash">SIGN IN</button>
                <button onClick={() => this.props.openModal('signup')} className="signup-splash" >CREATE AN ACCOUNT</button>
            </nav>
        );
        return (
            this.props.user ? <Redirect to="/home" /> : (
                <>
                   <div className="splash">
                       <img src="/assets/burgerhomepage.png"/>
                    </div>
                    <div className="login-signup-box">
                        {sessionLinks}
                    </div>
                    <div className="splash-header">
                        <img src="/assets/flavortown-icon.png" />
                        <h2 className="splash-header-text">Discover and share your favorite burger.</h2>
                    </div>

                </>
                )
        )
    }
}

export default Splash;