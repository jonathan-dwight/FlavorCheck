import * as FollowerAPIUtil from "../util/follower_api_util"

export const RECEIVE_FOLLOW = "RECEIVE_FOLLOW"
export const DELETE_FOLLOW = "DELETE_FOLLOW"

const receiveFollow = (payload) => ({
    type: RECEIVE_FOLLOW,
    payload
})

const deleteFollow = (followId) => ({
    type: DELETE_FOLLOW
})

export const createFollow = (follow) => (dispatch) => {
    return FollowerAPIUtil.createFollow(follow).then((resp) => {
        dispatch(receiveFollow(resp))
    })
}

export const deleteFollow = (followId) => (dispatch) => {
    return FollowerAPIUtil.deleteFollow(followId).then(() => {
        dispatch(deleteFollow(resp))
    })
}

