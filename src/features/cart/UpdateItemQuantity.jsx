import React from 'react'
import Button from '../../ui/Button'
import { useDispatch, useSelector } from "react-redux";
import { decreaseItemQuantity, increaseItemQuantity } from './cartSlice'

export default function UpdateItemQuantity({pizzaId, currentQuantity}) {
const  dispatch = useDispatch()
  return (
    <div className='flex gap-1 items-center md:gap-3'>
        <Button onClick={()=>dispatch(decreaseItemQuantity(pizzaId))} type='round'>-</Button>
        <span>{currentQuantity}</span>
        <Button onClick={()=>dispatch(increaseItemQuantity(pizzaId))} type='round'>+</Button>
    </div>
  )
}
