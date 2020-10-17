import { receiveCurrentUser } from "../actions/session_actions"
import * as UserAPIUtil from "../util/user_api.util"

export const fetchUser = (userId) => (dispatch) => {
    return UserAPIUtil.fetchUser(userId).then((resp) => {
        dispatch(receiveCurrentUser(resp))
    })
}
