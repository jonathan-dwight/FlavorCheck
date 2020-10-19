import { connect } from "react-redux";
import { fetchRestaurant } from "../../actions/restaurant_actions"

const mapStateToProps = (state, ownProps) => {
    
    let restaurant = state.entities.restaurants[ownProps.match.params.restaurantId]

    return {
        retaurant: restaurant
    }

}


const mapDispatchToProps = (dispatch) => {

    return {
        fetchRestaurant: (restaurantId) => dispatch(fetchRestaurant(restaurantId))
    }
}



