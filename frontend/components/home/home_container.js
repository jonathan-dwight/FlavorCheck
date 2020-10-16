import { connect } from "react-redux";
import Home from "./home";
import { logout } from "../../actions/session_actions";

const mapStateToProps = (state, ownProps) => {
    let sessionId = state.session.id
    return ({
        user: state.entities.users[sessionId]
    })
}

//WE WOULD HAVE AN ACTION CREATOR TO SPECIFY THE PEOPLE FOLLOWING
// FOR BURGER POST

const mapDispatchToProps = (dispatch) => {
    return ({
        logout: () => dispatch(logout())
    })

}

export default connect(mapStateToProps, mapDispatchToProps)(Home)