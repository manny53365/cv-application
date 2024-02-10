// import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpFromBracket } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

import '../../../../styles/PersonalInfo.css';

export default function PersonalInfo({ personalInfo, handlePersonalInfoChange, handleImage }) {

  return (
    <div className='personal-info'>
        <h2>Personal Information</h2>
        <input type="text" name='fName' placeholder='First Name' onChange={event => handlePersonalInfoChange(event)} />
        <input type="text" name='lName' placeholder='Last Name' onChange={event => handlePersonalInfoChange(event)} />
        <input type="text" name='title' placeholder='Title' onChange={event => handlePersonalInfoChange(event)} />
        <div className="file-upload-wrapper">
          <input type="file" name='photo' id="file-upload" onChange={event => handleImage(event)}/>
          <label htmlFor="file-upload" className="btn-file-upload">
          <FontAwesomeIcon icon={faArrowUpFromBracket} />
            &nbsp; Choose a photo
          </label>
          {personalInfo.photo && <div>Current photo: <img src={personalInfo.photo} alt="user" /></div>}
        </div>
        <input type="text" name='address' placeholder='Address' onChange={ event => handlePersonalInfoChange(event)} />
        <input type="text" name='phone' placeholder='Phone Number' onChange={ event => handlePersonalInfoChange(event)} />
        <input type="text" name='email' placeholder='Email' onChange={ event => handlePersonalInfoChange(event)} />
        <textarea rows="4" name='intro' placeholder='Intro' onChange={ event => handlePersonalInfoChange(event)} />
    </div>
  )
}

PersonalInfo.propTypes = {
  personalInfo: PropTypes.object,
  handlePersonalInfoChange: PropTypes.func,
  handleImage: PropTypes.func
};
