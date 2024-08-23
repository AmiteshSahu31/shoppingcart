import React from 'react'
import { NavLink } from 'react-router-dom'
import {FaCartShopping} from 'react-icons/fa6'
import { useSelector } from 'react-redux'

function NavBar() {
    const {cart} =useSelector((state)=> state);
    return (
        <div className=''>
            <nav className='flex justify-between items-center h-20 max-w-6xl mx-auto '>
                <NavLink to="/">
                    <div className='ml-5'>
                        <img src="../logo.png" className="h-14"/>
                    </div>
                </NavLink>

                <div className='flex text-slate-100 items-center space-x-6 font-medium'>
                    <NavLink to='/'>
                       <p>Home</p>
                    </NavLink>
             
                    <NavLink to="/cart">
                    <div className='relative'>
                    <FaCartShopping className='text-2xl'/>
                     {  
                      cart.length > 0 &&
                    <span    className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex 
                    justify-center items-center animate-bounce rounded-full text-white" >{cart.length}</span>
                    }
                      
                    </div>
                    </NavLink>
                </div>
            </nav>
        </div>
    )
}

export default NavBar
