import React from 'react'
import { useDispatch } from 'react-redux'
import { add, subtract } from '../store/slices/CounterSlice';

const Button = () => {
const dsispatch=useDispatch();
    const add=()=>{
dsispatch(add())
    }

    const subt=()=>{
        dsispatch(subtract())
    }
  return (
    <div>
      <button onClick={add}>Add</button>
      <button onClick={subt}>Subtract</button>
    </div>
  )
}

export default Button
