import React from "react";

class BurgerForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            description: "",
            rating: 3,
            restaurant_id: "",
            author_id: this.props.sessionId

        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleRestaurantChange = this.handleRestaurantChange.bind(this)
    }

    componentDidMount() {
        this.props.fetchUser(this.props.sessionId)
    }

    //maybe do restaurant in the backend?
    //would have to convert to int for rating

    handleInput(field) {
        return (e) => this.setState({ [field]: e.currentTarget.value })
    }

    handleRestaurantChange(e) {
        let restaurant = e.currentTarget.value
        let restaurantId;
        for (let i = 0; i < this.props.restaurants.length; i++) {
            if (this.props.restaurants[i].name === restaurant) {
                restaurantId = this.props.restaurants[i].id
            }
        }
        this.setState ({ restaurant_id: restaurantId })
    }
    
    handleSubmit(e) {
        e.preventDefault()
        this.props.processForm(this.state).then(() => {
            this.props.closeModal()
        })
    }

    render() {
        let restaurants = []
        const restaurantMap = this.props.restaurants.map((el) => {
            restaurants.push(<option key={el.id} value={el.name}>{el.name}</option>)
        })
        return(
            <div className="burger-form-box">
                <div className="inner-burger-form-box">
                    <form onSubmit={this.handleSubmit}>
                        <h4 className="burger-form-header">Share Your Flavor!</h4>

                        <input type="text" className="burger-name" 
                        placeholder="What burger are you enjoying?" 
                        onChange={this.handleInput("name")}/>

                        <textarea cols="30" rows="10" placeholder="What do you think?" 
                        className="text-description" onChange={this.handleInput("description")}></textarea>

                        <div
                        className="add-picture">Add Photo</div>

                        {/* <input type="range" min="1" max="5 " value="3" className="slider"></input> */}
                        <div className="restaurant-form">
                            <p>Burger Joints:</p>
                            <select className="restaurants" onChange={this.handleRestaurantChange}>
                                <option value="default">--select one--</option>
                                {restaurants.map((el) => el)}
                            </select>
                        </div>
                        <input type="submit" name="" id=""/>
                    </form>
                </div>
            </div>
        )
    }

}

export default BurgerForm;