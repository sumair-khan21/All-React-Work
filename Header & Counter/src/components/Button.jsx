import React from 'react'
import { useDispatch } from 'react-redux'
import { addCounter, minusCounter } from './Store/Slice/counterSlice'

const Button = () => {
  const dispatch = useDispatch();
  const addcount = ()=>{
     dispatch(addCounter());
  };
  const minusCount = ()=>{
    dispatch(minusCounter());
 };
  return (
  <>
  <button onClick={(addcount)}>button</button>
  <button onClick={(minusCount)}>minus button</button>
  
  </>
  )
}

export default Button