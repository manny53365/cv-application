import { Button } from "../../../Button";
import { Input } from "../../../Input"
import PropTypes from 'prop-types';

export const School = ({ id, education, onChange, onDelete }) => {
  return (
    <div className="education-item">
        <Input
        type='text'
        placeholder='Collge/University name'
        name='uniName'
        onChange={event => onChange(event, id)}
        value={education.uniName}
        />
        <Input
        type='text'
        placeholder='City'
        name='city'
        onChange={event => onChange(event, id)}
        value={education.city}
        />
        <Input
        type='text'
        placeholder='Degree'
        name='degree'
        onChange={event => onChange(event, id)}
        value={education.degree}
        />
        <Input
        type='text'
        placeholder='Subject'
        name='subject'
        onChange={event => onChange(event, id)}
        value={education.subject}
        />
        <Input
        type='text'
        placeholder='From Date'
        name='fromDate'
        onChange={event => onChange(event, id)}
        value={education.fromDate}
        />
        <Input
        type='text'
        placeholder='To Date'
        name='toDate'
        onChange={event => onChange(event, id)}
        value={education.toDate}
        />
        <Button text='Delete' onClick={() => onDelete(id)} />
    </div>
  )
}

School.propTypes = {
  id: PropTypes.string,
  education: PropTypes.object,
  onChange: PropTypes.func,
  onDelete: PropTypes.func,
};
