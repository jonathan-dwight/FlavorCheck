import { connect } from "react-redux";
import Home from "./home";
import { fetchBurgers, deleteBurger } from "../../actions/burger_actions"
import { deleteFollow } from "../../actions/follower_action"
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



const mapDispatchToProps = (dispatch) => {
    return ({
        openModal: (modal, id) => (dispatch(openModal(modal, id))),
        fetchBurgers: () => (dispatch(fetchBurgers())),
        fetchRestaurants: () => (dispatch(fetchRestaurants())),
        deleteBurger: (burgerId) => (dispatch(deleteBurger(burgerId))),
        deleteFollow: (followId) => (dispatch(deleteFollow(followId)))
    })

}

export default connect(mapStateToProps, mapDispatchToProps)(Home)