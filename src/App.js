import Welcome from "./components/Welcome";
import Project from "./components/Project";
import { useState} from "react";
import "./App.css";

function App() {
  const [arrayProject, setArrayProject] = useState([
    {
      nome: "Projeto 1",
      descricao: "Descrição do projeto 1 Descrição do projeto 1",
    },
    {
      nome: "Projeto 2",
      descricao: "Descrição do projeto 2 Descrição do projeto 2 ",
    },
    {
      nome: "Projeto 3",
      descricao: "Descrição do projeto 3 Descricação do projeto 3",
    },
  ]);
  return (
    <div className="App">
      <div className="containerWelcome">
        <Welcome />
      </div>
      <div className="projeto">
        {arrayProject.map((el, i) => {
          return (
            <Project
              nome={arrayProject[i].nome}
              descricao={arrayProject[i].descricao}
              key={i}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;