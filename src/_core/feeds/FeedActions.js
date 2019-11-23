export const FETCH_POSTS_PENDING = 'FETCH_POSTS_PENDING';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_ERROR = 'FETCH_POSTS_ERROR';
export const REMOVE_POST = 'REMOVE_POST';


export function fetchPostsPending() {
    return {
        type: FETCH_POSTS_PENDING
    }
}

export function fetchPostsSuccess(posts) {
    return {
        type: FETCH_POSTS_SUCCESS,
        payload: posts
    }
}

export function fetchPostsError(error) {
    return {
        type: FETCH_POSTS_ERROR,
        error: error
    }
}

export function removePost(postID) {
    return {
        type: REMOVE_POST,
        postID: postID
    }
}