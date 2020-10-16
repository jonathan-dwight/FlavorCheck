import React from "react";

class BurgerForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            description: "",
            rating: "",
            restaurant: "",
            author_id: this.props.user

        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    //maybe do restaurant in the backend?
    //would have to convert to int for rating

    handleInput(field) {
        return (e) => this.setState({ [field]: e.currentTarget.value })
    }

    handleSubmit(e) {
        e.preventDefault()
        // this.props
    }

    render() {
        debugger
        return(
            <form>
                <h4 className="burger-form-header">Share Your Flavor!</h4>

                <input type="text" className="burger-name" 
                placeholder="What burger are you enjoying?" 
                onChange={this.handleInput("name")}/>

                <textarea cols="30" rows="10" placeholder="What do you think?" 
                className="text-description" onChange={this.handleInput("description")}></textarea>

                <a href="javascript:void(0);" 
                className="add-picture">Add Photo</a>

                <input type="range" min="1" max="5 " value="3" className="slider"></input>

                <select className="restaurants" onChange={this.handleInput("restaurant")}>
                    <option value="McDonald's">McDonalds</option>
                    <option value="ShakeShack">ShackShack</option>
                    <option value="In-N-Out">In-N-Out</option>
                </select>
            </form>
        )
    }

}

export default BurgerForm;