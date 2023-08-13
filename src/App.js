import Welcome from "./components/Welcome";
import Modal from "./components/Modal";
import Project from "./components/Project";
import noProject from "./imgs/dispositivo.png";
import galeria from "./imgs/plataforma.png";
import { useState } from "react";
import "./App.css";

function App() {
  const [arrayProject, setArrayProject] = useState([
    {
      nome: "Galeria de Quadro",
      img: galeria,
      site: "https://artedecoracao.vercel.app/",
      repositorio: "https://github.com/Vinicius231/site",
    },
    {
      nome: "Projeto 2",
      img: noProject,
      site: "https://artedecoracao.vercel.app/",
      repositorio: "https://github.com/Vinicius231/site",
    },
    {
      nome: "Projeto 3",
      img: noProject,
      site: "https://artedecoracao.vercel.app/",
      repositorio: "https://github.com/Vinicius231/site",
    },
  ]);
  return (
    <div className="App">
      <Modal nome={arrayProject} />
      <div className="containerWelcome">
        <Welcome />
      </div>
      <div className="projeto">
        {arrayProject.map((el, i) => {
          return (
            <Project
              nome={arrayProject[i].nome}
              img={arrayProject[i].img}
              key={i}
              myKey={i}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
