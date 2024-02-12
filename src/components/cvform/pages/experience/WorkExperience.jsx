import PropTypes from 'prop-types';
import { Job } from './Job';
import { Button } from '../../../Button';

import '../../../../styles/WorkExperience.css';

export default function WorkExperience({ experience, handleExperienceChange, handleAddExperience, handleDeleteExperience }) {

    const jobs = experience.map(job => (
      <Job
      key={job.id}
      id={job.id}
      job={job}
      onChange={handleExperienceChange}
      onDelete={handleDeleteExperience}
      />
    ));

  return (
    <div className='work-info'>
        <h2>Work Experience</h2>
        {jobs}
        <Button text='Add' onClick={handleAddExperience}/>
    </div>
  )
}

WorkExperience.propTypes = {
  experience: PropTypes.array,
  handleDeleteExperience: PropTypes.func,
  handleExperienceChange: PropTypes.func,
  handleAddExperience: PropTypes.func,
};
