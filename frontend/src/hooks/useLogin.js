import {useState} from 'react'
import { useAuthContext } from './useAuthContext'
import { useNavigate } from 'react-router-dom';
import { useAxios } from './useAxios';

export const useLogin = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const navigate = useNavigate();
    const { dispatch } = useAuthContext();
    const {axiosPost} = useAxios();

    const signIn = async (formData) =>{
        setIsLoading(true);
        setError(null);
        try {
            const response = await axiosPost('api/Login', formData);
            if (response.data.successful) {
                const user = response.data.user;
                localStorage.setItem('user', JSON.stringify(user));
                dispatch({type: 'LOGIN', payload: user});
                navigate('/')
                setIsLoading(false)
            }else{
                setError(response.data.message);
                setIsLoading(false);
            }
        } catch (err) {
            console.log(err);
            setIsLoading(false)
        }

    }
    return {signIn, error, isLoading}
}
