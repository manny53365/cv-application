import { useState } from 'react'

export default function WorkExperience() {
  return (
    <div>
        <h2>Work Experience</h2>
        <input type="text" placeholder='Title/Role'/>
        <input type="text" placeholder='Company Name'/>
        <input type="text" placeholder='City'/>
        <input type="text" placeholder='From Date'/>
        <input type="text" placeholder='To Date'/>
        <button>Delete</button>
        <button>Add</button>
    </div>
  )
}
