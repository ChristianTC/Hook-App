import React, { useReducer } from 'react'
import { todoReducer } from './todoReducer'

const initialState = [
  {
    id: new Date().getTime(),
    description: 'Collect soul stone',
    done: false,
  },
  {
    id: new Date().getTime()*3,
    description: 'Collect power stone',
    done: false,
  },
]

const TodoApp = () => {

  const [todos, dispatch] = useReducer(todoReducer, initialState)

  return (
    <>
      <h1>TodoApp</h1>
      <hr />

      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
        <li>Item 5</li>
      </ul> 
    </>
  )
}

export default TodoApp
