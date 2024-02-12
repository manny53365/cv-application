import PropTypes from 'prop-types';

export const Button = ({ text, onClick, clearBtn}) => {
  return (
    <button style={{
      width: clearBtn ? '79%' : null,
      margin: clearBtn ? '5px' : null
      }} onClick={onClick}>
        {text}
    </button>
  )
}

Button.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func,
    clearBtn: PropTypes.bool
};
