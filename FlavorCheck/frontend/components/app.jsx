import React from "react";
import Modal from "./modal/modal"
import SplashContainer from "./splash/splash_container"
import HomeContainer from "./home/home_container"
import { AuthRoute, ProtectedRoute } from ".././util/route_util"
import { Route } from "react-router-dom";

const App = () => {
    return (
        <div>
            <Modal />
            <header>
                <h1>FlavorCheck</h1>
                <ProtectedRoute exact path="/home" component={HomeContainer} />
                <AuthRoute exact path="/" component={SplashContainer} />
                {/* this will become a protected route */}
            </header>
        </div>

    )
}
//NEED TO FIGURE OUT WHY I CAN GO TO SPLASH PAGE WHEN LOGGED IN
// it doesnt reRender?

export default App;