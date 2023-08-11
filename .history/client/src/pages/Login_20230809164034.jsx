import React from 'react'

const Login = () => {
  return (
    <div>
      <form>
      <label>E-Mail</label>
        <input type='email' placeholder='Enter E-Mail...' />
        <label>Password</label>
        <input type='password' placeholder='Enter Password...' />
      </form>
    </div>
  )
}

export default Login
