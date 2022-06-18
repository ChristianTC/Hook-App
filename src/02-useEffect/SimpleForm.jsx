import { useEffect } from "react"
import { useState } from "react"
import { Message } from "./Message"

export const SimpleForm = () => {

  const [formState, setFormState] = useState({
    username: 'strider',
    email: 'chris@gmail.com'
  })

  const { username, email} = formState

  const onInputChange = ({target}) => {
    const {name, value} = target
    setFormState({
      ...formState,
      [ name ]: value
    })
  }

  useEffect(()=>{
    console.log('useEffect called');
  }, []) //dependencies

  useEffect(()=>{
    console.log('formState changed');
  }, [formState]) //dependencies  

  useEffect(()=>{
    console.log('email changed');
  }, [email]) //dependencies  

  return (
    <>
      <h1>Simple Form</h1>
      <hr />

      <input 
        type="text"
        className="form-control"
        placeholder="Username"
        name="username" 
        value={ username }
        onChange={onInputChange}
      />

      <input 
        type="email"
        className="form-control mt-2"
        placeholder="chris@gmail.com"
        name="email" 
        value={ email }
        onChange={onInputChange}
      />

      {
        username === 'strider2' && <Message />  
      }
    </>
  )
}
