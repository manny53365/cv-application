import { useState } from 'react'

export default function PersonalInfo() {

    const [fName, setFName] = useState('');
    const [lName, setLName] = useState('');

  return (
    <div className='personal-info'>
        <h2>Personal Information</h2>
        <input type="text" placeholder='First Name' />
        <input type="text" placeholder='Last Name'/>
        <input type="text" placeholder='Title'/>
        <input type="file" placeholder='Photo'/>
        <input type="text" placeholder='Address' />
        <input type="text" placeholder='Phone Number'/>
        <input type="text" placeholder='Email'/>
        <textarea rows="4" />
    </div>
  )
}
