import PropTypes from 'prop-types';

function Button(props) {
  const { name, className, onClick } = props;

  return (
    <button type="button" name={name} className={className} onClick={onClick}>
      {name}
    </button>
  );
}

Button.defaultProps = {
  name: '',
  className: '',
  onClick: () => { },
};

Button.propTypes = {
  name: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
