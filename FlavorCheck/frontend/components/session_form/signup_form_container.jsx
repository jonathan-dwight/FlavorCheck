import React from 'react';
import { connect } from "react-redux";
import SessionForm from "./session_form"
import { signup, clearErrors } from "../../actions/session_actions";
import { openModal, closeModal } from '../../actions/modal_actions';

//ownProps will come from when we set up the route
const mapStateToProps = (state, ownProps) => {
    let errors = state.errors.session

    return ({
        'errors': errors,
        'formType': 'signup'
    })
}

const mapDispatchToProps = (dispatch) => {
    return ({
        processForm: (form) => dispatch(signup(form)),
        clearErrors: () => dispatch(clearErrors()),
        otherForm: (
            <button onClick={() => dispatch(openModal('login'))} className="header-button">
                Login
            </button>
        ),
        closeModal: () => dispatch(closeModal()),
        demoLogin: (user) => dispatch(login(user))
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)