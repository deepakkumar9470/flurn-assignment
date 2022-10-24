import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/context'

const Navbar = () => {
  const { user } = useContext(AuthContext)
  console.log('from navbar', { user })

  return (
    <nav className='nav'>
      <div className="logo">
        <Link className="link" to="/"><h1>Leave App</h1></Link>
      </div>

      <ul className='navlinks'>

        <>
          <li><Link className="link" to="/">Home</Link></li>
          <li><Link className="link" to="/add">AddLeave</Link></li>
          <li><Link className="link" to="/cal">Calender</Link></li>
        </>

        <>
          <li><Link className="link" to="/login">Login</Link></li>
          <li><Link className="link" to="/register">Signup</Link></li>
        </>

      </ul>
    </nav>
  )
}

export default Navbar