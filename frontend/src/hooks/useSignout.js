import { useAuthContext } from './useAuthContext';

export const useSignout = () => {
    const { dispatch } = useAuthContext();

    const signOut = () =>{
        dispatch({type: 'LOGOUT'});
    }
    return {signOut}
}
