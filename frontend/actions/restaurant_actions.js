import * as RestaurantAPI from "../util/restaurant_api_util"

export const RECEIVE_RESTAURANTS = "RECEIVE_RESTAURANTS"
export const RECEIVE_RESTAURANT = "RECEIVE_RESTAURANT"

export const receiveRestaurants = (restaurants) => {
    return {
        type: RECEIVE_RESTAURANTS,
        restaurants
    }
}

export const receiveRestaurant = (restaurant) => ({
    type: RECEIVE_RESTAURANT,
    restaurant
})

//thunk action creators

export const fetchRestaurants = () => (dispatch) => {
    return RestaurantAPI.fetchRestaurants().then((resp) => {
        dispatch(receiveRestaurants(resp))
    })
} 

export const fetchRestaurant = (restaurantId) => (dispatch) => {
    return RestaurantAPI.fetchRestaurant(restaurantId).then((resp) => {
        dispatch(receiveRestaurant(resp))
    })
} 