import React, { useEffect, useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useAuthContext } from '../hooks/useAuthContext';

const AuthLayout = ({ redirectPath = '/authentication', children}) => {
    const [isLoading, setIsLoading] = useState(true);
    const {user} = useAuthContext();
    
    useEffect(()=>{
        if (user || isLoading) {
        setIsLoading(false);
        }
    },[user, isLoading])

    if (isLoading) {
        return null;
    }

    if (!user) {
        return <Navigate to={redirectPath} replace/>
    }

    return (
        children ? children : <Outlet />
    )
}

export default AuthLayout