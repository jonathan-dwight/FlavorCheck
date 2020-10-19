//THIS WILL NEED TO FETCH THE SINGLE RESTAURANT PAGE and all the burgers associated

//THREAD IT DOWN TO FLAVOR INDEX ITEM?

import React from "react"

class Restaurant extends React.Component {

    componentDidMount() {
        this.props.fetchRestaurant(this.props.match.params.restaurantId)
    }
    render() {
        return (
            <div className="restaurant-show-container">RESTAURANT PAGE</div>
        )
    }
}

export default Restaurant;
