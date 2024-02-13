import '../../styles/Preview.css';
import PropTypes from 'prop-types';

export default function Preview({ cv }) {
  return (
    <div className="preview-container">
        Preview Page: {JSON.stringify(cv)}
        <div className="personal-info-preview">
            <div className="header-container">
                <div className="name-and-title">
                    <h1 className='preview-name'>{cv.personalInfo.fName} {cv.personalInfo.lName}</h1>
                    <h4 className='personal-info-title'>{cv.personalInfo.title}</h4>
                </div>
                <div className="contact-info">
                    <p className='preview-address'>{cv.personalInfo.address}</p>
                    <p className='preview-phone'>{cv.personalInfo.phone}</p>
                    <a className='preview-email' href={`mailto:${cv.personalInfo.email}`}>{cv.personalInfo.email}</a>
                </div>
            </div>
            <hr />
            {cv.personalInfo.photo && <img className='preview-photo' src={cv.personalInfo.photo} alt='user' />}
            <p className='preview-intro'>{cv.personalInfo.intro}</p>
        </div>
    </div>
  )
}

Preview.propTypes = {
    cv: PropTypes.object
};
