import React from "react";
import { Link, Redirect } from "react-router-dom";


class Splash extends React.Component {
    constructor(props) { 
        super(props)
    }

    render() {
        const sessionLinks = (
            <nav className="login-signup">
                <button onClick={() => this.props.openModal('login')} 
                className="login-splash">SIGN IN</button>

                <button onClick={() => this.props.openModal('signup')} 
                className="signup-splash" >CREATE AN ACCOUNT</button>
            </nav>
        );

        const text1 = "Keep track of your flavors and what you thought of it \
        by checking in a flavor and rating it."
        const text2 = "Expand your palate by trying new & different flavor \
        styles and unlock achievements along the way."
        
        const textAbout = "My name is JD Buendia and I am a Full Stack Software Engineer \
        from Los Angeles. This is my clone of Untappd built from the ground-up \
        with Ruby on Rails, React/Redux, HTML, and CSS. I hope you enjoy the flavors!"
        
        const githubLink = "https://github.com/jonathan-dwight/FlavorCheck"

        return (
            this.props.user ? <Redirect to="/home" /> : (
                <>
                   <div className="splash">
                        <img src={window.burgerhomepage}/>
                    </div>
                    <div className="login-signup-box">
                        {sessionLinks}
                    </div>
                    <div className="splash-header">
                        <img src={window.flavortownicon} />
                        <h2 className="splash-header-text">Discover and share your favorite burger.</h2>
                    </div>
                    <div className="features">
                        <div className="main-feature">
                            <img src={window.rating} alt=""/>
                                <div id="text-feature"></div>
                                <h4 className="text-feature-title">CHECK IN AND RATE BURGERS</h4>
                                <p className="text-feature-text">{text1}</p>
                        </div>
                        <div className="main-feature">
                            <img src={window.badges} />
                                <div id="text-feature"></div>
                            <h4 className="text-feature-title">EXPLORE NEW FLAVORS</h4>
                                <p className="text-feature-text">{text2}</p>
                        </div>
                    </div>
                    <div className="info-me">
                        <p className="info-text-me">{textAbout}</p>
                        <a href={githubLink}>
                            <button className="git-hub-button">GitHub Repo!</button>
                        </a>
                    </div>
                </>
                )
        )
    }
}

export default Splash;