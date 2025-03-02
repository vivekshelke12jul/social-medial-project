export const IsLikedByReqUser = (post, reqUserId) => {
    for(let user of post.likes) {
        if(user.id === reqUserId) {
            return true
        }
    }
    return false
}