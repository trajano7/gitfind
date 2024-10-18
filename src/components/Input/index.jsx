import "./styles.css";
import PropTypes from "prop-types";

const Input = ({ className = "", value = "", onChange = () => {} }) => {
  return (
    <input
      className={`${className}`}
      type="text"
      value={value}
      onChange={event => onChange(event.target.value)}
      placeholder="@usuario"
    />
  );
};

export default Input;

Input.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};
