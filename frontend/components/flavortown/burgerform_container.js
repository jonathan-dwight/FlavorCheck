import { connect } from "react-redux";
import BurgerForm from "./burgerform"
import { createBurger } from "../../actions/burger_actions";
import { closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
    let errors = state.errors.burgers
    let sessionId = state.session.id

    return ({
        'errors': errors,
        user: state.entities.users[sessionId].id
    })
}

const mapDispatchToProps = (dispatch) => {
    return ({
        processForm: (form) => dispatch(createBurger(form)),
        // clearErrors: () => dispatch(clearErrors()) //will handle errors after
        closeModal: () => dispatch(closeModal()),
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(BurgerForm)