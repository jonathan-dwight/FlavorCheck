import * as BurgerAPI from "../util/burger_api_util"
// import RECEIVE_ERRORS from "./session_actions"

export const RECEIVE_BURGERS = "RECEIVE_BURGERS"
export const RECEIVE_BURGER = "RECEIVE_BURGER"
export const REMOVE_BURGER = "REMOVE_BURGER"
export const RECEIVE_BURGER_ERRORS = "RECEIVE_BURGER_ERRORS"
export const CLEAR_BURGER_ERRORS = "CLEAR_BURGER_ERRORS"

//work on update later

export const receiveBurgers = (payload) => ({
    type: RECEIVE_BURGERS,
    payload
})

export const receiveBurger = (burger) => ({
    type: RECEIVE_BURGER,
    burger
})

export const removeBurger = (burger) => ({
    type: REMOVE_BURGER,
    burger
})

export const receiveBurgerErrors = (errors) => ({
    type: RECEIVE_BURGER_ERRORS,
    errors
})

export const deleteBurgerErrors = () => ({
    type: CLEAR_BURGER_ERRORS
})


//thunk action creators

export const fetchBurgers = () => (dispatch) => {
    return BurgerAPI.fetchBurgers().then((resp) => {
        dispatch(receiveBurgers(resp))
    }).fail((resp) => {
        dispatch(receiveBurgerErrors(resp.responseJSON))
    })
}

export const fetchBurger = (burgerId) => (dispatch) => {
    return BurgerAPI.fetchBurger(burgerId).then((resp) => {
        dispatch(receiveBurger(resp))
    }).fail((resp) => {
        dispatch(receiveBurgerErrors(resp.responseJSON))
    })
}

export const createBurger = (burger) => (dispatch) => {
    return BurgerAPI.createBurger(burger).then((resp) => {
        dispatch(receiveBurger(resp))
    }).fail((resp) => {
        dispatch(receiveBurgerErrors(resp.responseJSON))
    })
}


//WILL WORRY ABOUT UPDATING OR CANCEL IT COMPLETELY?

export const deleteBurger = (burgerId) => (dispatch) => {
    return BurgerAPI.deleteBurger(burgerId).then(() => {
        dispatch(removeBurger(burgerId))
    }).fail((resp) => {
        dispatch(receiveBurgerErrors(resp.responseJSON))
    })
}

export const clearBurgerErrors = () => (dispatch) => {
    return dispatch(deleteBurgerErrors())
}

