import { connect } from "react-redux";
import removeBurger from './deleteBurger'
import { deleteBurger } from "../../actions/burger_actions";
import { closeModal } from '../../actions/modal_actions';


const mapStateToProps = (state, ownProps) => {
 
    const burgerId = state.ui.modal.id

    return ({
        burgerId: burgerId
    })
}

const mapDispatchToProps = (dispatch) => {
    return ({
        processForm: (burgerId) => dispatch(deleteBurger(burgerId)),
        closeModal: () => dispatch(closeModal()),
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(removeBurger)