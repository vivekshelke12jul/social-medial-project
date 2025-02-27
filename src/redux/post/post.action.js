import { api } from "../../config/api";
import { 
    GET_ALL_POSTS_FAILURE, 
    GET_ALL_POSTS_REQUEST, 
    GET_ALL_POSTS_SUCCESS, 
    CREATE_POST_FAILURE, 
    CREATE_POST_REQUEST, 
    CREATE_POST_SUCCESS,
    GET_USERS_POSTS_REQUEST,
    GET_USERS_POSTS_SUCCESS,
    GET_USERS_POSTS_FAILURE,
} from "./post.actionType";

export const createPostAction = (postData) => async(dispatch) => {
    dispatch({type: CREATE_POST_REQUEST})
    try {
       const { data } = await  api.post('/api/post', postData)
       dispatch({type: CREATE_POST_SUCCESS, payload: data})
       console.log("created post", data)
    } catch (error) {
        console.log("\n@@@@@@@@@@@@@@@\n", error);
        dispatch({ type: CREATE_POST_FAILURE, payload: error });
    }
};

export const getAllPostsAction = () => async(dispatch) => {
    dispatch({type: GET_ALL_POSTS_REQUEST})
    try {
       const { data } = await  api.get('/api/post', postData)
       dispatch({type: GET_ALL_POSTS_SUCCESS, payload: data})
       console.log("get all post", data)
    } catch (error) {
        console.log("\n@@@@@@@@@@@@@@@\n", error);
        dispatch({ type: GET_ALL_POSTS_FAILURE, payload: error });
    }
};

export const getUsersPostAction = (userId) => async(dispatch) => {
    dispatch({type: GET_USERS_POSTS_REQUEST})
    try {
       const { data } = await  api.get(`/api/post/user/${userId}`, postData)
       dispatch({type: GET_USERS_POSTS_SUCCESS, payload: data})
       console.log("users post", data)
    } catch (error) {
        console.log("\n@@@@@@@@@@@@@@@\n", error);
        dispatch({ type: GET_USERS_POSTS_FAILURE, payload: error });
    }
};

export const likePostAction = (postId) => async(dispatch) => {
    dispatch({type: LIKE_POST_REQUEST})
    try {
       const { data } = await  api.put(`/api/post/like/${postId}`, postData)
       dispatch({type: LIKE_POST_SUCCESS, payload: data})
       console.log("liked post", data)
    } catch (error) {
        console.log("\n@@@@@@@@@@@@@@@\n", error);
        dispatch({ type: LIKE_POST_FAILURE, payload: error });
    }
};

