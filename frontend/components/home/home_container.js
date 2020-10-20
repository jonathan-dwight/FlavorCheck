import { connect } from "react-redux";
import Home from "./home";
import { fetchBurgers, deleteBurger } from "../../actions/burger_actions"
import { fetchUsers, fetchUser } from "../../actions/user_actions"
import { openModal } from '../../actions/modal_actions';


const mapStateToProps = (state, ownProps) => {
    let sessionId = state.session.id;
    return ({
        burgers: Object.values(state.entities.burgers),
        currentUser: state.entities.users[sessionId],
        restaurants: state.entities.restaurants,
        users: state.entities.users,
        sessionId: sessionId,
        followers: Object.values(state.entities.followers)
    })
}

// HAVE TO FETCH BURGERS AND DISPLAY EVERYTHING THAT THE USER IS FOLLOWING

const mapDispatchToProps = (dispatch) => {
    return ({
        openModal: (modal, id) => (dispatch(openModal(modal, id))),
        fetchBurgers: () => (dispatch(fetchBurgers())),
        fetchRestaurants: () => (dispatch(fetchRestaurants())),
        fetchUsers: () => (dispatch(fetchUsers())),
        fetchUser: (id) => (dispatch(fetchUser(id))),
        deleteBurger: (burgerId) => (dispatch(deleteBurger(burgerId)))
    })

}

export default connect(mapStateToProps, mapDispatchToProps)(Home)