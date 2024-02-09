import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <div>
        &copy; Manny53365 {new Date().getFullYear()}
        <a href="https://github.com/manny53365"><FontAwesomeIcon icon={faGithub} target='_blank' rel='noopener noreferrer' /></a>
    </div>
  )
}
