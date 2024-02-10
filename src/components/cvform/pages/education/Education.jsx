import { School } from './School';
import { Button } from '../../../Button';
import PropTypes from 'prop-types';

import '../../../../styles/Education.css';

export default function Education({ education, handleEducationChange, handleAddEducation, handleDeleteEducation }) {

  const studies = education.map(edu => (
    <School
      key={edu.id}
      id={edu.id}
      education={edu}
      onChange={handleEducationChange}
      onDelete={handleDeleteEducation}
    />
  ));

  return (
    <div className='education-info'>
        <h2>Education</h2>
        {studies}
        <Button text='Add' onClick={handleAddEducation} />
    </div>
  )
}

Education.propTypes = {
  education: PropTypes.array,
  handleEducationChange: PropTypes.func,
  handleAddEducation: PropTypes.func,
  handleDeleteEducation: PropTypes.func,
};
