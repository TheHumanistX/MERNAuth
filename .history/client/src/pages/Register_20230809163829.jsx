import React from 'react'

const Register = () => {
  return (
    <div>
      <form>
        <label>Name</label>
        <input type='text' placeholder='Enter Name...' />
        <label>E-Mail</label>
        <input type='email' placeholder='Enter E-Mail...' />
        <label>Password</label>
        <input type='password' placeholder='Enter Password...' />
      </form>
    </div>
  )
}

export default Register
