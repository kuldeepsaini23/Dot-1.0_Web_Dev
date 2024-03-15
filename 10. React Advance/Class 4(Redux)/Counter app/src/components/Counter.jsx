import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement } from '../redux/Slices/counterSlice';

const Counter = () => {
  const count = useSelector((state)=> state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={()=> dispatch(increment())}>Increment</button>
      <br/>

      <div>{count}</div>
      <br/>

      <button onClick={()=> dispatch(decrement())}>Decrement</button>

    </div>
  )
}

export default Counter