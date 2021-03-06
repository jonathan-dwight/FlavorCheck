import { connect } from "react-redux";
import { fetchUser, updateUser } from "../../actions/user_actions"
import { fetchBurgers, deleteBurger } from "../../actions/burger_actions"
import { createFollow, deleteFollow } from "../../actions/follower_action"
import { openModal } from '../../actions/modal_actions';
import Profile from "./profile"

const mapStateToProps = (state, ownProps) => {

    let burgers;
    if (state.entities.burgers === null) {
        burgers = null
    } else {
        burgers = Object.values(state.entities.burgers)
    }
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
        updateUser: (id, formData) => dispatch(updateUser(id, formData)),
        fetchBurgers: () => (dispatch(fetchBurgers())),
        openModal: (modal, id) => (dispatch(openModal(modal, id))),
        deleteBurger: (burgerId) => (dispatch(deleteBurger(burgerId))),
        createFollow: (followerId, followeeId) => (dispatch(createFollow(followerId, followeeId))),
        deleteFollow: (followId) => (dispatch(deleteFollow(followId)))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Profile)