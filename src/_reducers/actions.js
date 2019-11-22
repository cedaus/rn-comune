export const FETCH_POSTS_PENDING = 'FETCH_POSTS_PENDING';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_ERROR = 'FETCH_POSTS_ERROR';


function fetchPostsPending() {
    return {
        type: FETCH_POSTS_PENDING
    }
}

function fetchPostsSuccess(products) {
    return {
        type: FETCH_POSTS_SUCCESS,
        products: products
    }
}

function fetchPostsError(error) {
    return {
        type: FETCH_POSTS_ERROR,
        error: error
    }
}