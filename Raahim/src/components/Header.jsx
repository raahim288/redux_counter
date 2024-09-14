import React from 'react'
import { useSelector } from 'react-redux';

const Header = () => {
    const { counter } = useSelector((state) => state.counterReducer);

  return (
    <div>
 
 <h1>SImple Counter app with the help of Redux</h1>

      <h1>Counter :{counter}</h1>
    </div>
  )
}

export default Header
