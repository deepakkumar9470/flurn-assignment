import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useParams, useNavigate, useFetcher } from 'react-router-dom'
import { apiUrl } from '../services/api'
import { toast } from 'react-hot-toast'

const EditLeave = () => {

  // const [startDate,setStartDate] = useState('')
  // const [endDate,setEndDate] = useState('')

  const [inputs, setInputs] = useState({
    startDate: "",
    endDate: ""
  })
  const navigate = useNavigate()
  const { id } = useParams()
  console.log(id)

  useEffect(() => {
    const fechSingleBank = async () => {
      try {
        const res = await axios.get(`${apiUrl}/api/leaves/${id}`)
        setInputs(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    fechSingleBank()
  }, [id])


  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }
  const handleUpdate = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.put(`${apiUrl}/api/leaves/${id}`, inputs)
      console.log(res.data)
      toast.success('Leave updated Successfully')
      navigate('/')
    } catch (error) {
      console.log(error)
    }

  }

  return (
    <div className='leaveContainer'>
      <h1>Edit Leave</h1>
      <form className='form'>
        <label className='label' htmlFor="date">Enter Start date</label>
        <input
          type="date"
          required
          value={inputs.startDate}
          onChange={handleChange}
          name="startdate"
          placeholder='Enter start date' />

        <label className='label' htmlFor="date">Enter End date</label>

        <input
          type="date"
          required
          value={inputs.endDate}
          onChange={handleChange}
          name="enddate"
          placeholder='Enter end date' />

        <label className='label' htmlFor="date">Enter Reason (optional)</label>
        <input type="text" placeholder="Enter reason" />
        <button className='addleaveBtn' onClick={handleUpdate}>Edit</button>
        <span><Link className='link' to="/">Go Back</Link></span>
      </form>
    </div>
  )
}

export default EditLeave