import React from 'react'
import Button from './Button'
import { useAuthContext } from '../../hooks/useAuthContext'
import Searchbar from './Searchbar';
import { useSignout } from '../../hooks/useSignout';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const {user} = useAuthContext();
    const {signOut} = useSignout();
    const navigate = useNavigate();

    return (    
        <div className='flex sticky top-0 w-full h-48 bg-purple-900 rounded-b-md text-white px-8 py-4'>
            <nav className='flex flex-col gap-y-8 md:gap-y-4 w-full'>
                <div className='flex w-full justify-between'>
                    <div className='cursor-pointer'>
                        <p className='text-xs md:text-base md:font-semibold'>Online <br/> <span className='text-sm font-bold md:text-lg'>Market</span></p>
                    </div>
                    <div className='flex gap-x-2 cursor-pointer'>
                        {!user && <Button label={"Sign in"} action={() => navigate('/authentication')}/>}
                        {user && <Button label={"Sign out"} action={signOut}/>}
                        
                    </div>
                </div>
                <div className='flex w-full md:justify-center'>
                    <Searchbar />
                </div>
                <div className='flex w-full'>

                </div>
            </nav>
        </div>
  )
}

export default Navbar