import React, { useState } from 'react'
import FloatingLabelInput from './FloatingLabelInput'
import { useLogin } from '../../hooks/useLogin'

const LoginForm = () => {
    const [formData, setFormData] = useState({
        'email': '',
        'password': '',
    })
    const {signIn, error, isLoading} = useLogin();

    const handleSubmit = (e) => {
        e.preventDefault();
        signIn(formData)
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