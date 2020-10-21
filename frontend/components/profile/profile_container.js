import { connect } from "react-redux";
import { fetchUser} from "../../actions/user_actions"
import Profile from "./profile"

const mapStateToProps = (state, ownProps) => {

    let user = state.entities.users[ownProps.match.params.userId]

    return {
        user: user
    }

}


const mapDispatchToProps = (dispatch) => {

    return {
        fetchUser: (userId) => dispatch(fetchUser(userId))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Profile)