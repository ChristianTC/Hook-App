import React from 'react'
import {useForm} from '../hooks/useForm'

const TodoAdd = ({ onNewTodo }) => {

  const { description, onInputChange, onResetForm } = useForm({
    description: ''
  })

  const onFormSubmit = (event) => {
    // console.log(event);
    event.preventDefault()
    if (description.length <= 1) {
      return
    }
    const newTodo = {
      id: new Date().getTime(),
      done: false,
      description: description,
    }
    onNewTodo && onNewTodo(newTodo)
    onResetForm()
  }

  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        placeholder='What is there to do?'
        className='form-control'
        name='description'
        value={description}
        onChange={onInputChange}
      />
      <button type="submit" className='btn btn-outline-primary mt-1'>
        Add
      </button>
    </form>
  )
}

export default TodoAdd
