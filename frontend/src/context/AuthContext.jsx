import { createContext, useEffect, useReducer } from "react";

export const AuthContext = createContext();

export const authReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {user: action.payload};
        case 'LOGOUT':
            localStorage.clear();
            return {user: null}
        default:
            return state;
    }
}

export const AuthContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(authReducer, {user: null, token: null});
    console.log(`AuthContext state: ${state.user}`)
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        const token = JSON.parse(localStorage.getItem('authorization'));
        if (user && token) {
            dispatch({type: 'LOGIN', payload: {...user, "token": token}})
        }
    }, [])
    return (
        <AuthContext.Provider value={{...state, dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}