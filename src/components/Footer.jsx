import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import '../styles/Footer.css';

export default function Footer() {
  return (
    <div className='footer'>
        &copy; Manny53365 {new Date().getFullYear()}
        <a className='gh-link' href="https://github.com/manny53365"><FontAwesomeIcon icon={faGithub} target='_blank' rel='noopener noreferrer' /></a>
    </div>
  )
}
