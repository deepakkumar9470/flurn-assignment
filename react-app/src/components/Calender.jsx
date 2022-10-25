import React, { useState, useEffect, useContext } from 'react'

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';
import { apiUrl } from '../services/api';
import axios from 'axios';

const Calender = () => {
  const [dateC, setDate] = useState(new Date());

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
    <div className='calenderContainer'>
      <h1>Leaves Calender</h1>

        <div className="calenderInnner">
        {leaves.map((l,i)=>(
          <Calendar 
          onChange={setDate} 
          value={dateC} 
          // activeStartDate={moment(l.startDate).format()}
          className="react-calendar"/>
         ))}
        </div>
     
    </div>
  )
}

export default Calender