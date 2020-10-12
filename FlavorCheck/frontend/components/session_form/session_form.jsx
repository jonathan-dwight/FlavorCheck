import React from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";

class SessionForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: "",
            email: "",
            fullname: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
  
    }


    handleInput(field) {
        return (e) => this.setState({ [field]: e.currentTarget.value })
    }

    handleSubmit(e) {
        e.preventDefault();
        let user = this.state;
        this.props.processForm(user).then(
            () => this.props.history.push("/home")
        ).fail(() => this.props.history.push(`/${this.props.formType}`))
        this.setState({
            username: "",
            password: "",
            email: "",
            fullname: ""
        });

    }

    componentWillUnmount() {
        return dispatch(this.props.clearErrors())
    }

    render() {
        let errors = this.props.errors.map((el, idx) => {
            return <li key={idx}>{el}</li>
        })

        const emailInput = (this.props.formType === "login") ? null : (
            <label>Email:
                <input type="text" onChange={this.handleInput("email")} value={this.state.email} />
            </label>
        );

        const nameInput = (this.props.formType === "login") ? null : (
            <label>Name:
                <input type="text" onChange={this.handleInput("fullname")} value={this.state.fullname} />
            </label>
        );

        const buttonLog = (this.props.formType === "login") ? (
            <Link to="/signup" >
                <button>Sign Up!</button>
            </Link >
        ) : (
                <Link to="/login" >
                    <button>Log In!</button>
                </Link >
            );

        let check;

        const header = (this.props.formType === "login") ? check = "Log In!" : check = "Sign Up!"

        return (
            <form onSubmit={this.handleSubmit}>

                {buttonLog}
                <h2>{header}</h2>
                {nameInput}
                <label>Username:
                    <input type="text" onChange={this.handleInput("username")} value={this.state.username} />
                </label>
                {emailInput}
                <label>Password:
                    <input type="password" onChange={this.handleInput("password")} value={this.state.password} />
                </label>
                {errors}
                <input type="submit" />
            </form>
        )
    }
}

export default SessionForm;