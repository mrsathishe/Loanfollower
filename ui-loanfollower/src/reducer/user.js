import { UPDATE_USER_STATUS, LOGIN_LOADING } from "../actions/user.action";

const userIntialState = {
    isLoggedIn: true,
    isLoginLoading: false,
    user: {}
}

const user = (state= userIntialState, action) => {
    switch (action.type) {
        case LOGIN_LOADING:
            return {
                ...state, 
                isLoginLoading: action.isLoading
            }
        case UPDATE_USER_STATUS:
            return {
                ...state,
                user: {
                    ...state.user,
                    status: action.data.userStatus
                }
            }
        default:
            return state;
    }
}

export default user;