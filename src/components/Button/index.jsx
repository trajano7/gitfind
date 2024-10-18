import PropTypes from "prop-types";
import "./styles.css";

const Button = ({ children, className = "", onClick = () => {} }) => {
  return <button onClick={onClick} className={`${className}`}>{children}</button>;
};

export default Button;

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
};
