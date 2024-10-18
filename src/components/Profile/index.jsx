import PropTypes from "prop-types";
import "./styles.css";

const Profile = ({ userData }) => {
  return (
    <div className="profile">
      <img src={userData.avatar_url} alt="imagem de perfil" />
      <div className="profile__data">
        <h3>{userData.name}</h3>
        <span>{`@${userData.username}`}</span>
        <p>
          {userData.description}
        </p>
      </div>
    </div>
  );
};

export default Profile;

Profile.propTypes = {
  userData: PropTypes.object.isRequired, // Define que userData deve ser um objeto e é obrigatório
};