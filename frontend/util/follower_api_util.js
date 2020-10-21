export const createFollow = (followerId, followeeId) => {
    return $.ajax({
        url: '/api/followers',
        method: 'POST',
        data: { follower: {
            follower_id: followerId,
            followee_id: followeeId
        }}
    })
}

export const deleteFollow = (followId) => {
    return $.ajax({
        url: `/api/followers/${followId}`,
        method: 'DELETE'
    })
}
