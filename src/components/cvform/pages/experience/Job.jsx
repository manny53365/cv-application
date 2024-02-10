import { Button } from "../../../Button";
import { Input } from "../../../Input";
import PropTypes from 'prop-types';

export const Job = ({ id, job, onChange, onDelete }) => {
  return (
    <div className="job">
        <Input
        onChange={onChange}
        type='text'
        placeholder='Role/title'
        name='role'
        value={job.role}
        />
        <Input
        onChange={onChange}
        type='text'
        placeholder='Company name'
        name='company'
        value={job.company}
        />
        <Input
        onChange={onChange}
        type='text'
        placeholder='City'
        name='city'
        value={job.city}
        />
        <Input
        onChange={onChange}
        type='text'
        placeholder='From Date'
        name='fromDate'
        value={job.fromDate}
        />
        <Input
        onChange={onChange}
        type='text'
        placeholder='To Date'
        name='toDate'
        value={job.toDate}
        />
        <Button text='Delete' onClick={() => onDelete(id)} />
    </div>
  )
}

Job.propTypes = {
    id: PropTypes.string,
    job: PropTypes.object,
    onChange: PropTypes.func,
    onDelete: PropTypes.func,
};
