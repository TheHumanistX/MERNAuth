import {useState} from 'react'

const Register = () => {

  const [data, setData] = useState({
    name: '',
    email: '',
    password: ''
  })

  const registerUser = (e) => {
    e.preventDefault()
    console.log('Registering User...')

  }

  return (
    <div>
      <form onSubmit={registerUser}>
        <label>Name</label>
        <input type='text' placeholder='Enter Name...' />
        <label>E-Mail</label>
        <input type='email' placeholder='Enter E-Mail...' />
        <label>Password</label>
        <input type='password' placeholder='Enter Password...' />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Register
