import React, { useState, useEffect } from 'react'

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment'

const Calender = () => {
  const [value, setValue] = useState(new Date());

  return (
    <div className='calenderContainer'>
      <h1>Leaves Calender</h1>
      <Calendar onChange={setValue} value={value} className="react-calendar"/>
    </div>
  )
}

export default Calender