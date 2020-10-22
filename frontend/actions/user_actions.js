import { receiveCurrentUser } from "../actions/session_actions"
import * as UserAPIUtil from "../util/user_api.util"

export const RECEIVE_ALL_USERS = "RECEIVE_ALL_USERS"

const receiveAllUsers = (payload) => ({
    type: RECEIVE_ALL_USERS,
    payload
})


export const fetchUser = (userId) => (dispatch) => {
    return UserAPIUtil.fetchUser(userId).then((resp) => {
        dispatch(receiveCurrentUser(resp))
    })
}

export const fetchUsers = () => (dispatch) => {
    return UserAPIUtil.fetchUsers().then((resp) => {
        dispatch(receiveAllUsers(resp))
    })
}

export const updateUser = (id, formData) => (dispatch) => {
    return UserAPIUtil.updateUser(id, formData).then((resp) => {
        dispatch(receiveCurrentUser(resp))
    })
}

