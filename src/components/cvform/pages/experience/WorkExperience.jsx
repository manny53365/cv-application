import { useState } from 'react';

import '../../../../styles/WorkExperience.css';

export default function WorkExperience() {

    const [title, setTitle] = useState('');
    const [company, setCompany] = useState('');
    const [city, setCity] = useState('');
    const [fromDate, setFromDate] = useState('');
    const [toDate, setToDate] = useState('');

  return (
    <div className='work-info'>
        <h2>Work Experience</h2>
        <input type="text" placeholder='Title/Role' onChange={event => setTitle(event.target.value)} value={title}/>
        <input type="text" placeholder='Company Name' onChange={event => setCompany(event.target.value)} value={company}/>
        <input type="text" placeholder='City' onChange={event => setCity(event.target.value)} value={city}/>
        <input type="text" placeholder='From Date' onChange={event => setFromDate(event.target.value)} value={fromDate}/>
        <input type="text" placeholder='To Date' onChange={event => setToDate(event.target.value)} value={toDate}/>
        <button>Delete</button>
        <button>Add</button>
    </div>
  )
}
