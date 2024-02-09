import { useState } from 'react';

import '../styles/PersonalInfo.css'

export default function PersonalInfo() {

    const [fName, setFName] = useState('');
    const [lName, setLName] = useState('');

  return (
    <div className='personal-info'>
        <h2>Personal Information</h2>
        <input type="text" placeholder='First Name' onChange={event => setFName(event.target.value)} value={fName}/>
        <input type="text" placeholder='Last Name' onChange={event => setLName(event.target.value)} value={lName}/>
        <input type="text" placeholder='Title'/>
        <label>
            <input type="file" name='Photo'/>Photo
        </label>
        <input type="text" placeholder='Address' />
        <input type="text" placeholder='Phone Number'/>
        <input type="text" placeholder='Email'/>
        <textarea rows="4" />
    </div>
  )
}
