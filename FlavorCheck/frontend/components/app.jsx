import React from "react";
import SplashContainer from "./splash/splash_container"
import LoginFormContainer from "./session_form/login_form_container"
import SignupFormContainer from "./session_form/signup_form_container"
// import SearchContainer from "./benches/search_container"
// import { AuthRoute } from ".././util/route_util"
import { Route } from "react-router-dom";

const App = () => {
    return (
        <div>
            <header>
                <h1>FlavorCheck</h1>
                <Route exact path="/" component={SplashContainer} />
            </header>

            <Route exact path="/login" component={LoginFormContainer} />
            <Route exact path="/signup" component={SignupFormContainer} />
            {/* <Route exact path="/" component={SearchContainer} /> */}
        </div>

    )
}

export default App;