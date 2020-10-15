export const fetchRestaurants = () => {
    return $.ajax({
        url: '/api/restaurants',
        method: 'GET'
    })
}

export const fetchRestaurant = (restaurantId) => {
    return $.ajax({
        url: `/api/restaurants/${restaurantId}`,
        method: 'GET'
    })
}
