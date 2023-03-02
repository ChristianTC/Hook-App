export const todoReducer = (initialState = [], action) => {

  switch (action.type) {
    case 'ABC':
      throw new Error('Action.type = ABC was not implemented')
  
    default:
      return initialState;
  }

}