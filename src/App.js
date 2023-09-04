import Welcome from "./components/Welcome";
import Modal from "./components/Modal";
import Project from "./components/Project";
import noProject from "./imgs/dispositivo.png";
import galeria from "./imgs/plataforma.png";
import megamnGit from './imgs/megaman.png'
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
      nome: "Megaman",
      img: megamnGit,
      site: "https://vinicius231.github.io/Game-megaman/",
      repositorio: "https://github.com/Vinicius231/Game-megaman",
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
