import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { apiUrl } from '../services/api'
import { toast } from 'react-hot-toast'
const AddLeave = () => {

  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [reason, setReason] = useState('')

  const navigate = useNavigate()

  const handleAdd = async (e) => {
    e.preventDefault()
    console.log(e)

    try {
      const res = await axios.post(`${apiUrl}/api/leaves/add`, {
        startDate,
        endDate,
        reason
      });
      toast.success('Leave added Successfully')
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='leaveContainer'>
      <h1>Add Leave</h1>
      <form className='form'>
        <label className='label' htmlFor="date">Enter Start date</label>
        <input
          type="date"
          required
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          name="date"
          placeholder='Enter start date' />

        <label className='label' htmlFor="date">Enter End date</label>

        <input
          type="date"
          required
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          name="date"
          placeholder='Enter end date' />

        <label className='label' htmlFor="date">Enter Reason (optional)</label>
        <input
          type="text"
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          placeholder="Enter reason" />
        <button className='addleaveBtn' onClick={handleAdd}>Add</button>
        <span><Link className='link' to="/">Go Back</Link></span>
      </form>
    </div>
  )
}

export default AddLeave