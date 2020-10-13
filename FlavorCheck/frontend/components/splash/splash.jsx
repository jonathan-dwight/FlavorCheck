import React from "react";
import { Link, Redirect } from "react-router-dom";


// const Splash = (props) => {
//     const sessionLinks = (
//         <nav className="login-signup">
//             <button onClick={() => props.openModal('login')}>Login</button>
//             <button onClick={() => props.openModal('signup')}>Signup</button>
//         </nav>
//     );
//     return (
//         props.user ? <Redirect to="/home"/> : sessionLinks
//     )
// }

// export default Splash;

//is it because its not a class component???

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

                </>
                )
        )
    }
}

export default Splash;