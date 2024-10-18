import PropTypes from "prop-types";
import "./styles.css";

const RepoCard = ({ title, description }) => {
  return (
    <div className="repo">
      <strong>{title}</strong>
      <p>{description}</p>
      <hr />
    </div>
  );
};

export default RepoCard;

RepoCard.propTypes = {
  title: PropTypes.node.isRequired,
  description: PropTypes.node.isRequired,
};
