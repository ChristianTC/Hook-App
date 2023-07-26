import React from 'react'
import TodoList from './TodoList'
import TodoAdd from './TodoAdd'
import { useTodo } from '../hooks/useTodo'

const TodoApp = () => {
// useTodo
// todos, handleNewTodo, handleDeleteTodo, handleToggleTodo

  const {todos, todosCount, pendingTodosCount, handleNewTodo, handleDeleteTodo, handleToggleTodo} = useTodo()
  
  return (
    <>
      <h1>TodoApp {todosCount}, <small>pending: {pendingTodosCount}</small></h1>
      <hr />

      <div className="row">
        <div className="col-7">
          {/* TodoList */}
          <TodoList 
            todos={todos} 
            onDeleteTodo={ handleDeleteTodo } 
            onToggleTodo={ handleToggleTodo }
            /> 
          {/* End TodoList */}
        </div>
        <div className="col-5">
          <h4>Add TODO</h4>
          <hr />
          {/* TodoAdd */}
          <TodoAdd onNewTodo={handleNewTodo}/>
          {/* End TodoAdd */}
        </div>
      </div>
    </>
  )
}

export default TodoApp
