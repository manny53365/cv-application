import PropTypes from 'prop-types';

export const Input = ({ type, name, placeholder, onChange, value }) => {
  return (
    <input 
    type={type}
    name={name}
    placeholder={placeholder}
    onChange={onChange}
    value={value}
    />
  )
}

Input.propTypes = {
    type: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.string
};
