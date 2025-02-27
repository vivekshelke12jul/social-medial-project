
const initialState = {
    jwt: null,
    error: null,
    loading: false,
    user: null
};

export const authReducer = (state = initialState, action) => {

    console.log("authReducer : ", action);

    switch (action.type) {
        case "LOGIN_REQUEST":
        case "REGISTER_REQUEST":
        case "GET_PROFILE_REQUEST":
            return { ...state, loading: true, error: null };

        case "GET_PROFILE_SUCCESS":
        case "UPDATE_PROFILE_SUCCESS":
            return { ...state, user: action.payload, loading: false, error: null };
    
        case "LOGIN_SUCCESS":
        case "REGISTER_SUCCESS":
            return { ...state, jwt: action.payload, loading: false, error: null };
            
        case "LOGIN_FAILURE":
        case "REGISTER_FAILURE":
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};