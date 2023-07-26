import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({todos=[], onDeleteTodo, onToggleTodo}) => {

  return (
    <ul className='list-group'>
      {
        todos.map(todo => (
          // TodoItem
          <TodoItem key={todo.id} todo={todo} onDeleteTodo={onDeleteTodo} onToggleTodo={onToggleTodo} />
          // END TodoItem
        ))
      }
    </ul>
  )
}

export default TodoList
