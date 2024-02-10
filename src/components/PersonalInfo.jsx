import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpFromBracket } from '@fortawesome/free-solid-svg-icons';

import '../styles/PersonalInfo.css';

export default function PersonalInfo() {

    const [fName, setFName] = useState('');
    const [lName, setLName] = useState('');
    const [title, setTitle] = useState('');
    const [photo, setPhoto] = useState(null);
    const [photoErr, setPhotoErr] = useState(null);
    const [address, setAddress] = useState('');
    const [number, setNumber] = useState('');
    const [email, setEmail] = useState('');
    const [intro, setIntro] = useState('');

    const handleImage = event => {
      setPhoto(null);
      let img = event.target.files[0];
      console.log(img);

      if (!img.type.includes('image')){
        setPhotoErr('Selected file must be an image');
        return;
      }

      if (img.size > 2000000){
        setPhotoErr('Image file size must be less than 2mb');
        return;
      }

      setPhotoErr(null);
      setPhoto(img);
      console.log('Photo updated')

    }

  return (
    <div className='personal-info'>
        <h2>Personal Information</h2>
        <input type="text" placeholder='First Name' onChange={event => setFName(event.target.value)} value={fName}/>
        <input type="text" placeholder='Last Name' onChange={event => setLName(event.target.value)} value={lName}/>
        <input type="text" placeholder='Title' onChange={event => setTitle(event.target.value)} value={title}/>
        <div className="file-upload-wrapper">
          <input type="file" name='Photo' id="file-upload" onChange={handleImage}/>
          <label htmlFor="file-upload" className="btn-file-upload">
          <FontAwesomeIcon icon={faArrowUpFromBracket} />
            &nbsp; Choose a photo
          </label>
          {photoErr && <div className='error'>{photoErr}</div>}
          {photo && <div>Current photo: {photo.name}</div>}
        </div>
        <input type="text" placeholder='Address' onChange={event => setAddress(event.target.value)} value={address} />
        <input type="text" placeholder='Phone Number' onChange={event => setNumber(event.target.value)} value={number}/>
        <input type="text" placeholder='Email' onChange={event => setEmail(event.target.value)} value={email}/>
        <textarea rows="4" placeholder='Intro' onChange={event => setIntro(event.target.value)} value={intro}/>
    </div>
  )
}
