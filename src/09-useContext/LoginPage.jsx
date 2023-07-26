import React, { useContext } from 'react'
import { UserContext } from './context/UserContext';

const LoginPage = () => {

  const {user, setUser} = useContext(UserContext);

  return (
    <>
      <h1>LoginPage</h1>
      <hr />

      <pre>
        { JSON.stringify(user, null, 3) }
      </pre>

      <button 
        className='btn btn-primary'
        onClick={()=>setUser({
          id: 123,
          name: 'Christ',
          email: 'chris@123.com'
        })}
      >
        Set user
      </button>
    </>
  )
}

export default LoginPage