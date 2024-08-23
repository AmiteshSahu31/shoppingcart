import React from 'react'
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch } from 'react-redux';
import { remove } from '../redux/slices/CartSlice';
import {toast} from 'react-hot-toast'

function CartItem({item,itemIndex}) {
    const dispatch=useDispatch();

    const removeFromCart=() =>{
        dispatch(remove(item.id));
        toast.error("Item Removed")
    }
    return (
        <div className='flex border-b-2 border-black '>
            <div className='h-[180px]'>
                <img src={item.image} className='h-full w-full' />
            </div>
            <div>
                <h1>{item.title}</h1>
                <h1>{item.description}</h1>
                <div>
                    <p>{item.price}</p>
                </div>
                <div onClick={removeFromCart}>
                    <RiDeleteBin6Line /> 
                </div>
            </div>
            
        </div>
    )
}

export default CartItem
