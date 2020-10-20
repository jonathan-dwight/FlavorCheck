export const createFollow = (follower) => {
    return $.ajax({
        url: '/api/followers',
        method: 'POST',
        data: { follower }
    })
}

export const deleteFollow = (followId) => {
    return $.ajax({
        url: `/api/followers/${followId}`,
        method: 'DELETE'
    })
}
