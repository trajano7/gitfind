import PropTypes from "prop-types";
import RepoCard from "../RepoCard";
import "./styles.css";

const RepoList = ({ repos }) => {
  return (
    <div className="repoList">
      <h2>Repositórios</h2>
      {repos &&
        repos.map((repo) => (
          <RepoCard
            key={repo.id}
            title={repo.name}
            description={repo.description}
          />
        ))}
       {
        !repos && <h4>Esse usuário não possui nenhum repositório público.</h4> 
       }
    </div>
  );
};

export default RepoList;

RepoList.propTypes = {
  repos: PropTypes.array, // Define que userData deve ser um objeto e é obrigatório
};
