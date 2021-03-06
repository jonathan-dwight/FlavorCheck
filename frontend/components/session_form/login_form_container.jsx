import React from 'react';
import SessionForm from "./session_form"
import { connect } from "react-redux";
import { login, clearErrors } from "../../actions/session_actions";
import { openModal, closeModal } from '../../actions/modal_actions';


const mapStateToProps = (state, ownProps) => {
    let errors = state.errors.session

    return ({
        'errors': errors,
        'formType': 'login'
    })
}

const mapDispatchToProps = (dispatch) => {
    return ({
        processForm: (user) => dispatch(login(user)),
        clearErrors: () => dispatch(clearErrors()),
        otherForm: (
            <p onClick={() => dispatch(openModal('signup'))} className="header-button">
                Sign Up!
            </p>
        ),
        closeModal: () => dispatch(closeModal()),
        demoLogin: (user) => dispatch(login(user))
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)