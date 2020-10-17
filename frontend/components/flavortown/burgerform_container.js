import { connect } from "react-redux";
import BurgerForm from "./burgerform"
import { createBurger } from "../../actions/burger_actions";
import { closeModal } from '../../actions/modal_actions';
import { fetchUser } from '../../actions/user_actions'

const mapStateToProps = (state, ownProps) => {
    let errors = state.errors.burgers
    let sessionId = state.session.id
 
    return ({
        'errors': errors,
        user: state.entities.users[sessionId],
        sessionId: sessionId,
        restaurants: Object.values(state.entities.restaurants),
        restaurantList: state.entities.restaurants
    })
}

const mapDispatchToProps = (dispatch) => {
    return ({
        processForm: (form) => dispatch(createBurger(form)),
        fetchUser: (userId) => dispatch(fetchUser(userId)),
        closeModal: () => dispatch(closeModal()),
        // clearErrors: () => dispatch(clearErrors()) //will handle errors after
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(BurgerForm)