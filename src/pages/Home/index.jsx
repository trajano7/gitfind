import Button from "../../components/Button";
import Header from "../../components/Header";
import Input from "../../components/Input";
import "./styles.css";
import background from "../../assets/background.svg";
import Profile from "../../components/Profile";
import RepoList from "../../components/RepoList";
import { useState } from "react";

function App() {
  const [value, setValue] = useState("");
  const [currentUser, setCurrentUser] = useState("");
  const [repos, setRepos] = useState(null);
  const [error, setError] = useState("");

  console.log("current user: ", currentUser);

  const valueChangeHandler = (inputValue) => {
    setValue(inputValue);
  };

  const getDataHandler = async () => {
    setCurrentUser("");
    setRepos(null);
    setError("");
    const response = await fetch(`https://api.github.com/users/${value}`);

    if (response.status === 404) {
      setError("Usuário não encontrado.");
      return;
    } else if (!response.ok) {
      setError("Algo deu errado. Tente novamente mais tarde.");
      return;
    }

    const userData = await response.json();
    console.log(userData);
    setCurrentUser({
      avatar_url: userData.avatar_url,
      description: userData.bio,
      username: userData.login,
      name: userData.name,
    });

    const reposResponse = await fetch(
      `https://api.github.com/users/${value}/repos`
    );

    if (!reposResponse.ok) {
      setError("Não foi possível carregar os repositórios.");
      return;
    }

    const reposData = await reposResponse.json();
    console.log(reposData);
    const repos = reposData.map(repo => {
      return {
        id: repo.id,
        name: repo.name,
        description: repo.description ? repo.description : ""
      }
    }) 
    setRepos(repos);
  };

  return (
    <div className="container">
      <Header />
      <div className="content">
        <img src={background} className="background" alt="background image" />
        <div className="info">
          <div className="searchContainer">
            <Input onChange={valueChangeHandler} value={value} />
            <Button onClick={getDataHandler}>Buscar</Button>
          </div>
          {!currentUser && !error && <h4>Busque por um usuário.</h4>}
          {error && <h4>{error}</h4>}
          {currentUser && (
            <>
              <Profile userData={currentUser} />
              <hr />
              <RepoList repos={repos} />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
