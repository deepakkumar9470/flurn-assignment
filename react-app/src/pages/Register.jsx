import React, { useContext, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/context'
import { toast } from 'react-hot-toast'
const Register = () => {
  const { register } = useContext(AuthContext)
  const navigate = useNavigate()

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleRegister = async (e) => {
    e.preventDefault()
    try {
      const res = await register({ name, email, password })
      toast.success('Registration Successful')
      navigate('/login')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='auth'>
      <h1>Register</h1>
      <form>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text" name="name"
          placeholder='Enter name' />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text" name="email"
          placeholder='Enter email' />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password" name="password"
          placeholder='password' />

        <button className='registerBtn' onClick={handleRegister}>Register</button>
        <span>Already have an account? <Link className='link' to="/login">Login</Link></span>
      </form>
    </div>
  )
}

export default Register