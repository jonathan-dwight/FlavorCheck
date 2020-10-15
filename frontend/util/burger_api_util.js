export const fetchBurgers = () => {
    return $.ajax({
        url: '/api/burgers',
        method: 'GET'
    })
}

export const fetchBurger = (burgerId) => {
    return $.ajax({
        url: `/api/burgers/${burgerId}`,
        method: 'GET'
    })
}

export const createBurger = (burger) => {
    return $.ajax({
        url: '/api/burgers',
        method: 'POST',
        data: { burger }
    })
}


// WORRY ABOUT UPDATING BURGER LATER
export const updateBurger = (burger) => {
    return $.ajax({
        url: `/api/burgers/${burger.id}`,
        method: 'PATCH',
        data: { burger }
    })
}

export const deleteBurger = (burgerId) => {
    return $.ajax({
        url: `/api/burgers/${burgerId}`,
        method: 'DELETE'
    })
}