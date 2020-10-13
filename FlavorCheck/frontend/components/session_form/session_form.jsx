import React from "react";
import { Link } from "react-router-dom";
import { Redirect, withRouter } from "react-router-dom";

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
            () => {
                this.props.closeModal()
                this.props.history.push("/home")
            })
        this.setState({
            username: "",
            password: "",
            email: "",
            fullname: ""
        });

    }

    componentWillUnmount() {
        return (this.props.clearErrors())
    }

    render() {
        
        let errors = this.props.errors.map((el, idx) => {
            return <div className="errors" key={idx}>{el}</div>
        })

        const emailInput = (this.props.formType === "login") ? null : (
            <label>
                <input type="text" onChange={this.handleInput("email")} value={this.state.email} className="login-input" placeholder="E-mail"/>
            </label>
        );

        const nameInput = (this.props.formType === "login") ? null : (
            <label>
                <input type="text" onChange={this.handleInput("fullname")} value={this.state.fullname} className="login-input" placeholder="Name"/>
            </label>
        );


        let check;

        const header = (this.props.formType === "login") ? check = "Log In!" : check = "Sign Up!"

        return (
            <div className="login-form-container">
                <form onSubmit={this.handleSubmit} className="login-form-box">
                    {this.props.otherForm}
                    {/* Please {this.props.formType} or {this.props.otherForm} */}
                    <div onClick={this.props.closeModal} className="close-x">X</div>

                    <h2 className="header-modal">Welcome To Flavortown!!</h2>
                    {nameInput}
                    <label>
                        <input type="text" onChange={this.handleInput("username")} value={this.state.username} className="login-input" placeholder="Username"/>
                    </label>
                    {emailInput}
                    <label>
                        <input type="password" onChange={this.handleInput("password")} value={this.state.password} className="login-input" placeholder="Password"/>
                    </label>
                    {errors}
                    <input type="submit" className="session-submit" value={this.props.formType.toUpperCase()}/>
                </form>
            </div>
        )

    }
}

export default withRouter(SessionForm);