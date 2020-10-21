import { connect } from "react-redux";
import { fetchUser} from "../../actions/user_actions"
import { fetchBurgers, deleteBurger } from "../../actions/burger_actions"
import { createFollow, deleteFollow } from "../../actions/follower_action"
import { openModal } from '../../actions/modal_actions';
import Profile from "./profile"

const mapStateToProps = (state, ownProps) => {

    // let user = state.entities.users[ownProps.match.params.userId]
    let burgers = Object.values(state.entities.burgers)
    let sessionId = state.session.id;

    return {
        users: state.entities.users,
        burgers: burgers,
        restaurants: state.entities.restaurants,
        restaurantList: Object.values(state.entities.restaurants),
        currentUser: state.entities.users[sessionId],
        followers: Object.values(state.entities.followers)
    }

}


const mapDispatchToProps = (dispatch) => {

    return {
        fetchUser: (userId) => dispatch(fetchUser(userId)),
        fetchBurgers: () => (dispatch(fetchBurgers())),
        openModal: (modal, id) => (dispatch(openModal(modal, id))),
        deleteBurger: (burgerId) => (dispatch(deleteBurger(burgerId))),
        createFollow: (followerId, followeeId) => (dispatch(createFollow(followerId, followeeId))),
        deleteFollow: (followId) => (dispatch(deleteFollow(followId)))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Profile)