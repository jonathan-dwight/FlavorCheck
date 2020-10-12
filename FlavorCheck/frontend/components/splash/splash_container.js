import { connect } from "react-redux";
import Splash from "./splash";
import { login, logout, signup } from "../../actions/session_actions";

const mapStateToProps = (state) => {
    debugger
    let sessionId = state.session.id
    return ({
        user: state.entities.users[sessionId]
    })
    // would need to have an if statement in greeting... to redirect
}

const mapDispatchToProps = (dispatch) => {
    return ({
        signup: (user) => dispatch(signup(user)),
        login: (user) => dispatch(login(user)),
        logout: () => dispatch(logout())
    })

}

export default connect(mapStateToProps, mapDispatchToProps)(Splash)