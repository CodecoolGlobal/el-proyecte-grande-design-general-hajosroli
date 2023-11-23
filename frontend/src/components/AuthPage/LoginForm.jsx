import React, { useState } from 'react'
import FloatingLabelInput from './FloatingLabelInput'
import { useLogin } from '../../hooks/useLogin'
import { useAxios } from '../../hooks/useAxios'

const LoginForm = () => {
    const [formData, setFormData] = useState({
        'email': '',
        'password': '',
    })
    const {axiosPost} = useAxios();
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        const response = await axiosPost('/api/Login', formData);
        setIsLoading(false);
        console.log(response); 
    }

    return (
        <form onSubmit={handleSubmit} className='flex gap-y-4 flex-col'>
            <FloatingLabelInput id={"email"} label={"Email address"} type={"email"} setFormData={setFormData} formData={formData} isLoading={isLoading}/>
            <FloatingLabelInput id={"password"} label={"Password"} type={"password"} setFormData={setFormData} formData={formData} isLoading={isLoading}/>
            <button type='submit' disabled={isLoading} className='bg-purple-900 rounded-md p-2 text-white font-bold disabled:opacity-75'>Log in</button>
        </form>
    )
}

export default LoginForm