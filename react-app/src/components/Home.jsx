import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import moment from 'moment';

import { FaEdit, FaTrash } from 'react-icons/fa'
import { AuthContext } from '../context/context';
import { apiUrl } from '../services/api';

const Home = () => {
  const { user } = useContext(AuthContext)
  console.log(user)
  const [leaves, setLeaves] = useState([])

  useEffect(() => {
    const fetchLeaves = async () => {
      let tokenData = JSON.parse(localStorage.getItem('token'));
      console.log(tokenData)
      let header = {
        "Authorization": `Bearer ${tokenData.accesstoken}`
      }
      const res = await axios.get(`${apiUrl}/api/leaves`, {
        headers: header
      })
      console.log(res.data)
      setLeaves(res.data)
    }
    fetchLeaves()
  }, [])


  return (
    <div className='homeContainer'>

      {
        leaves.map((leave, i) => (
          <div key={leave._id} className="calCard">
            <div className='dates'>
              <span className="reason">{leave.reason}</span>
              <h2>{moment(leave.startDate).format('Do YYYY')}</h2>
              <span className='to'>to</span>
              <h2>{moment(leave.endDate).format('Do YYYY')}</h2>
              <Link className='link editIcon' to={`edit/${leave._id}`}><FaEdit color='rgb(153, 153, 245)' /></Link>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Home