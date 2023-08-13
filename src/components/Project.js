import "../styles/projectStyle.css";
import galeria from "../imgs/plataforma.png";
import noProject from "../imgs/dispositivo.png";
import { keyboard } from "@testing-library/user-event/dist/keyboard";
import Modal from "./Modal";

export default function Project(props) {

  return (
    <main className="containerProject" id={props.myKey}>
      <div className="fundoProjeto">
        <img className="imgProjeto" src={props.img}></img>
        <h3 className="name">{props.nome}</h3>
      </div>
    </main>
  );
}
