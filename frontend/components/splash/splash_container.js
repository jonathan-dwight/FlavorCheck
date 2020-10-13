import { connect } from "react-redux";
import Splash from "./splash";
import { logout } from "../../actions/session_actions";
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = (state) => {
    let sessionId = state.session.id
    return ({
        user: state.entities.users[sessionId]
    })
}

const mapDispatchToProps = (dispatch) => {
    return ({
        openModal: (modal) => dispatch(openModal(modal)),
        logout: () => dispatch(logout())
    })

}

export default connect(mapStateToProps, mapDispatchToProps)(Splash)