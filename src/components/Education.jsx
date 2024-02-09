import { useState } from 'react';

import '../styles/Education.css';

export default function Education() {

    const [uniName, setUniName] = useState('');
    const [city, setCity] = useState('');
    const [degree, setDegree] = useState('');
    const [subject, setSubject] = useState('');
    const [fromDate, setFromDate] = useState('');
    const [toDate, setToDate] = useState('');

  return (
    <div className='education-info'>
        <h2>Education</h2>
        <input type="text"
        placeholder='College/Univeristy Name' 
        onChange={event => setUniName(event.target.value)} 
        value={uniName}/>
        <input type="text" placeholder='City' onChange={event => setCity(event.target.value)} value={city}/>
        <input type="text" placeholder='Degree' onChange={event => setDegree(event.target.value)} value={degree}/>
        <input type="text" placeholder='Subject' onChange={event => setSubject(event.target.value)} value={subject}/>
        <input type="text" placeholder='From' onChange={event => setFromDate(event.target.value)} value={fromDate}/>
        <input type="text" placeholder='To' onChange={event => setToDate(event.target.value)} value={toDate}/>
        <button>Delete</button>
        <button>Add</button>
    </div>
  )
}
