import React from "react";
import Modal from "./modal/modal"
import FooterLinks from "../components/footer"
import NavBarContainer from "../components/nav_bar/nav_bar_container"
import SplashContainer from "./splash/splash_container"
import FlavorTownContainer from "./flavortown/flavortown_container"
import HomeContainer from "./home/home_container"
import ProfileContainer from "./profile/profile_container"
import { AuthRoute, ProtectedRoute } from ".././util/route_util"
import { Switch, Redirect } from "react-router-dom";

//testing dummy
import Restaurant from "./restaurant/restaurant"

const App = () => {
    return (
        <>
            <div className="whole-page">
                <Modal />
                <header>
                    <ProtectedRoute exact path="/home" component={NavBarContainer} />
                    <ProtectedRoute exact path="/flavortown" component={NavBarContainer} />
                    <ProtectedRoute exact path="/profile/:userId" component={NavBarContainer} />
                    <ProtectedRoute exact path="/restaurant/:restaurantId" component={NavBarContainer} />
                </header>

                <Switch>
                    <ProtectedRoute exact path="/home" component={HomeContainer} />
                    <ProtectedRoute exact path="/flavortown" component={FlavorTownContainer} />
                    <ProtectedRoute exact path="/restaurant/:restaurantId" component={Restaurant} />
                    <ProtectedRoute exact path="/profile/:userId" component={ProfileContainer} />
                    <AuthRoute exact path="/" component={SplashContainer} />
                    <Redirect to="/"></Redirect>
                </Switch>
                
            <footer>
                <FooterLinks />
            </footer>
            </div>
        </>

    )
}

export default App;