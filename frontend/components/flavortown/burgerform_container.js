import { connect } from "react-redux";
import BurgerForm from "./burgerform"
import { createBurger, clearBurgerErrors } from "../../actions/burger_actions";
import { closeModal } from '../../actions/modal_actions';
import { fetchUser } from '../../actions/user_actions'
import { withRouter } from "react-router-dom"

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
        clearBurgerErrors: () => dispatch(clearBurgerErrors()) //will handle errors after
    })
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BurgerForm))