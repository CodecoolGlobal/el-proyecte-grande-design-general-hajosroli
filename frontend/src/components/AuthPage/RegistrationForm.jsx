import React, { useState } from 'react'
import FloatingLabelInput from './FloatingLabelInput';
import { useAxios } from '../../hooks/useAxios';

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        'name': '',
        'email': '',
        'password': '',
    })
    const {axiosPost} = useAxios();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        const response = await axiosPost('/api/Register', formData);
        setIsLoading(false);
        console.log(response); 
    }

    return (
        <form onSubmit={handleSubmit} className='flex gap-y-4 flex-col'>
            <FloatingLabelInput id={"name"} label={"Name"} type={"text"} setFormData={setFormData} formData={formData} isLoading={isLoading}/>
            <FloatingLabelInput id={"email"} label={"Email address"} type={"email"} setFormData={setFormData} formData={formData} isLoading={isLoading}/>
            <FloatingLabelInput id={"password"} label={"Password"} type={"password"} setFormData={setFormData} formData={formData} isLoading={isLoading}/>
            <button type='submit' disabled={isLoading} className='bg-purple-900 rounded-md p-2 text-white font-bold disabled:opacity-75'>Register</button>
        </form>
    )
}

export default RegistrationForm