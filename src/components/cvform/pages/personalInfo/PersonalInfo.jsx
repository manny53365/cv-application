// import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpFromBracket } from '@fortawesome/free-solid-svg-icons';
import { Input } from '../../../Input';
import PropTypes from 'prop-types';

import '../../../../styles/PersonalInfo.css';

export default function PersonalInfo({ personalInfo, handlePersonalInfoChange }) {

  return (
    <div className='personal-info'>
        <h2>Personal Information</h2>
        <Input
        type='text'
        name='fName'
        placeholder='First Name'
        onChange={event => handlePersonalInfoChange(event)}
        value={personalInfo.fName}
        />
        <Input
        type='text'
        name='lName'
        placeholder='Last Name'
        onChange={event => handlePersonalInfoChange(event)}
        value={personalInfo.lName}
        />
        <Input
        type='text'
        name='title'
        placeholder='Title'
        onChange={event => handlePersonalInfoChange(event)}
        value={personalInfo.title}
        />
        <div className="file-upload-wrapper">
          <Input
          type='file'
          name='photo'
          onChange={event => handlePersonalInfoChange(event)}
          id="file-upload"
          value={personalInfo.photo}
          />
          <label htmlFor="file-upload" className="btn-file-upload">
            <FontAwesomeIcon icon={faArrowUpFromBracket} />
            &nbsp; Choose a photo
          </label>
          {personalInfo.photo && <div>Current photo: <img src={personalInfo.photo} alt="user" /></div>}
        </div>
        <Input
        type='text'
        name='address'
        placeholder='Address'
        onChange={event => handlePersonalInfoChange(event)}
        value={personalInfo.address}
        />
        <Input
        type='tel'
        name='phone'
        placeholder='Phone number'
        onChange={event => handlePersonalInfoChange(event)}
        value={personalInfo.phone}
        />
        <Input
        type='email'
        name='email'
        placeholder='Email'
        onChange={event => handlePersonalInfoChange(event)}
        value={personalInfo.email}
        />
        <textarea rows="4" name='intro' placeholder='Intro' onChange={ event => handlePersonalInfoChange(event)} value={personalInfo.intro} />
    </div>
  )
}

PersonalInfo.propTypes = {
  personalInfo: PropTypes.object,
  handlePersonalInfoChange: PropTypes.func
};
