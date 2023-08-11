import React from 'react'

const Login = () => {

  const loginUser = (e) => {
    e.preventDefault()
    console.log('Login User')
  }

  return (
    <div>
      <form onSubmit={loginUser}>
        <label>E-Mail</label>
        <input type='email' placeholder='Enter E-Mail...' />
        <label>Password</label>
        <input type='password' placeholder='Enter Password...' />
        <button type='submit'>Login</button>
      </form>
    </div>
  )
}

export default Login
