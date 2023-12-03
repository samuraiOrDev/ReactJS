/* 
- useSelector: to get the state from the store
- useDispatch: to dispatch an action
*/

import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../app/store"

import { decrement, increment } from './counterSlice'


export const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()
  return (
    <div>
      <div>
        <button aria-label="Increment value" onClick={() => dispatch(increment())}>
          Increment
        </button>
        <span>{count}</span>
        <button aria-label="Decrement value" onClick={() => dispatch(decrement())}>
          Decrement
        </button>
      </div>
    </div>
  )
}
