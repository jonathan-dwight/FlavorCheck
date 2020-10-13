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
        this.demoLogin = this.demoLogin.bind(this);
  
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

    demoLogin(e) {
        e.preventDefault()
        const demo = { username: "demo_user", password: "password"}
        const speed = 100;
    
        if (this.state.username !== demo.username) {
            const inputUsername = setInterval(() => {
                if(this.state.username !== demo.username) {
                    const temp = demo.username.slice(0, this.state.username.length + 1);
                    this.setState({username: temp})
                } else {
                    clearInterval(inputUsername);
                    animatePW();
                }
            }, speed)
        }

        const animatePW = () => {
            if (this.state.password !== demo.password) {
                const inputPassword = setInterval(() => {
                    if (this.state.password !== demo.password) {
                        const temp = demo.password.slice(0, this.state.password.length + 1);
                        this.setState({ password: temp });
                    } else {
                        clearInterval(inputPassword);
                        this.props.demoLogin(demo).then(
                            () => {
                                this.props.closeModal()
                                this.props.history.push("/home")
                            })
                    }
                }, speed);
            }
        }

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
                <input type="text" onChange={this.handleInput("email")} 
                value={this.state.email} className="login-input" 
                placeholder="E-mail"/>
            </label>
        );

        const nameInput = (this.props.formType === "login") ? null : (
            <label>
                <input type="text" onChange={this.handleInput("fullname")} 
                value={this.state.fullname} className="login-input" 
                placeholder="Name"/>
            </label>
        );
        
        let checkHead;
        const title = (this.props.formType === "login") ? (
            checkHead = "Your Flavor Destination Awaits 🤤"
        ) : (checkHead = "Experience The Flavor Check 😏")
        
        let demoButton;
        (this.props.formType === "signup") ? (
            demoButton = null
        ) : (
            demoButton = <button className="header-button" onClick={this.demoLogin}>Demo User</button>
        )
        
        return (
            <div className="login-form-container">
                <form className="login-form-box" onSubmit={this.handleSubmit} >

                    <div>
                        {this.props.otherForm}
                        {demoButton}
                    </div>
                    <div onClick={this.props.closeModal} className="close-x">X</div>

                    <h2 className="header-modal">{checkHead}</h2>
                    {nameInput}

                    <label>
                        <input type="text" onChange={this.handleInput("username")} 
                        value={this.state.username} className="login-input" 
                        placeholder="Username"/>
                    </label>

                    {emailInput}

                    <label>
                        <input type="password" onChange={this.handleInput("password")} 
                        value={this.state.password} className="login-input" 
                        placeholder="Password"/>
                    </label>

                    {errors}

                    <input type="submit" className="session-submit" 
                    value={this.props.formType.toUpperCase()}/>
                </form>
            </div>
        )

    }
}

export default withRouter(SessionForm);