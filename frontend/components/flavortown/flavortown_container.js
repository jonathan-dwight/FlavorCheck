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
        // users: Object.keys(state.entities.users).map((id) => { return (state.entities.users[id]) }),
        // restaurants: Object.keys(state.entities.restaurants).map((id) => { return (state.entities.restaurants[id]) }),
        currentUser: state.entities.users[sessionId]
    })
}

const mapDispatchToProps = (dispatch) => {
    return ({
        openModal: (modal) => (dispatch(openModal(modal))),
        fetchBurgers: () => (dispatch(fetchBurgers())),
        fetchRestaurants: () => (dispatch(fetchRestaurants()))
    })

}

export default connect(mapStateToProps, mapDispatchToProps)(FlavorTown)