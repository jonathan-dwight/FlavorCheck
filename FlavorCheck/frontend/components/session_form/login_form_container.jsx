import React from 'react';
import { connect } from "react-redux";
import SessionForm from "./session_form"
import { login, clearErrors } from "../../actions/session_actions";
import { openModal, closeModal } from '../../actions/modal_actions';


//ownProps will come from when we set up the route
const mapStateToProps = (state, ownProps) => {
    let errors = state.errors.session

    return ({
        'errors': errors,
        'formType': 'login'
    })
}

const mapDispatchToProps = (dispatch) => {
    return ({
        processForm: (form) => dispatch(login(form)),
        clearErrors: () => dispatch(clearErrors()),
        otherForm: (
            <button onClick={() => dispatch(openModal('signup'))} className="header-button">
                Signup
            </button>
        ),
        closeModal: () => dispatch(closeModal())
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)