import React from "react";
import Modal from "./modal/modal"
import FooterLinks from "../components/footer"
import SplashContainer from "./splash/splash_container"
import HomeContainer from "./home/home_container"
import { AuthRoute, ProtectedRoute } from ".././util/route_util"
import { Route, Switch } from "react-router-dom";

const App = () => {
    return (
        <div>
            <Modal />
            <header>
            </header>
            <Switch>
                <ProtectedRoute exact path="/home" component={HomeContainer} />
                <AuthRoute exact path="/" component={SplashContainer} />
            </Switch>
            <footer>
                <FooterLinks />
            </footer>
        </div>

    )
}

export default App;