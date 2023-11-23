import {useState} from 'react'
import { useAuthContext } from './useAuthContext'
import { useNavigate } from 'react-router-dom';
import { useAxios } from './useAxios';

export const useLogin = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const navigate = useNavigate();
    const { dispatch } = useAuthContext();
    const {http} = useAxios();

    const signIn = (formData) =>{
        setIsLoading(true);
        setError(null);

        http.get('sanctum/csrf-cookie').then(response=>{
            http.post('api/login', formData)
            .then(response=>{
            if (response.status === 200) {
                localStorage.setItem('user', JSON.stringify(response.data['user']));
                localStorage.setItem('authorization', JSON.stringify(response.data['access_token']));
                dispatch({type: 'LOGIN', payload: {...response.data['user'], "token": response.data['access_token']}})
                navigate('/')
            }
            }).catch(error => {
                setError(error.response.data['message'])
                setIsLoading(false)
            })
        });
    }
    return {signIn, error, isLoading}
}
