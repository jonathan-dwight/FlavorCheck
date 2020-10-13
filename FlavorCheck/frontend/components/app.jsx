import React from "react";
import SplashContainer from "./splash/splash_container"
import Modal from "./modal/modal"
// import { AuthRoute } from ".././util/route_util"
import { Route } from "react-router-dom";

const App = () => {
    return (
        <div>
            <Modal />
            <header>
                <h1>FlavorCheck</h1>
                <Route exact path="/" component={SplashContainer} />
            </header>
        </div>

    )
}

export default App;