import { ActionCreator, Reducer } from "redux"
export type User = {
    id?: string,
    email?: string
}
export type UserState = {
    currentUser: User
    auth: boolean
}
const initialState: UserState = {
    currentUser: {},
    auth: false
}


const SET_USER = "SET_USER"
export type SetUser  = {
    type: typeof SET_USER,
    payload: User
}
export const setUser: ActionCreator<SetUser> = (user: User) => ({
    type: SET_USER,
    payload: user
})

const LOGOUT = "LOGOUT"
export type Logout = {
    type: typeof LOGOUT
}
export const logout: ActionCreator<Logout> = () => ({
    type: LOGOUT
})




type UserAction = SetUser | Logout



export  const userReducer: Reducer<UserState, UserAction> = (state = initialState, action) => {
    switch(action.type) {
        case SET_USER:
            return {
                ...state,
                currentUser: action.payload,
                auth: true
            }
            case LOGOUT:
                localStorage.removeItem('token')
                return {
                    ...state,
                    currentUser: {},
                    auth: false
                }
        default:
            return state
    }
}

