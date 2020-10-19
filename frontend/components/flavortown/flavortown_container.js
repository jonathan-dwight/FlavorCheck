import { connect } from "react-redux";
import FlavorTown from "./flavortown";
import { fetchRestaurants } from "../../actions/restaurant_actions"
import { fetchBurgers } from "../../actions/burger_actions"
import { openModal } from '../../actions/modal_actions';


const mapStateToProps = (state, ownProps) => {

    let sessionId = state.session.id;

    return ({
        burgers: Object.values(state.entities.burgers),
        users: state.entities.users,
        restaurants: state.entities.restaurants,
        restaurantList: Object.values(state.entities.restaurants),
        currentUser: state.entities.users[sessionId]
    })
}

const mapDispatchToProps = (dispatch) => {
    return ({
        openModal: (modal) => (dispatch(openModal(modal))),
        fetchBurgers: () => (dispatch(fetchBurgers())),
        fetchRestaurants: () => (dispatch(fetchRestaurants())),
        imageHash: Date.now()
    })

}

export default connect(mapStateToProps, mapDispatchToProps)(FlavorTown)