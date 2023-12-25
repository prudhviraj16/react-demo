import { LOGIN_FAILED, LOGIN_SUCCESS } from "./login.action";

const initialState = {
    isLoggedIn: false,
    error: "Please try again later"
}

const loginReducer = (state = initialState, action: { type: any; payload: any }) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoggedIn: true
            }
        case LOGIN_FAILED:
            return {
                ...state,
                isLoggedIn: false
            }
        default:
            return state
    }
}

export default loginReducer

