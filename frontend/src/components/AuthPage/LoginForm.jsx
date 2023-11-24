import React, { useState } from 'react'
import FloatingLabelInput from './FloatingLabelInput'
import { useLogin } from '../../hooks/useLogin'

const LoginForm = () => {
    const [formData, setFormData] = useState({
        'email': '',
        'password': '',
    })
    const {signIn, error, isLoading} = useLogin();

    const handleSubmit = async (e) => {
        e.preventDefault();
        signIn(formData);
    }

    return (
        <form onSubmit={handleSubmit} className='flex gap-y-6 flex-col'>
            {error && 
                <div className='w-full border-red-600 rounded-md bg-red-500 p-3 text-white font-semibold'>
                    <p>{error}</p>
                </div>
            }
            <FloatingLabelInput id={"email"} label={"Email address"} type={"email"} setFormData={setFormData} formData={formData} isLoading={isLoading}/>
            <FloatingLabelInput id={"password"} label={"Password"} type={"password"} setFormData={setFormData} formData={formData} isLoading={isLoading}/>
            <button type='submit' disabled={isLoading} className='bg-purple-900 rounded-md p-2 text-white font-bold disabled:opacity-75'>Log in</button>
        </form>
    )
}

export default LoginForm