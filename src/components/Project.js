import "../styles/projectStyle.css";
import dispositivo from "../imgs/dispositivo.png";

export default function Project(props) {
  return (
    <div className="containerProject">
      <div className="fundoProjeto">
        <img className="imgProjeto" src={dispositivo}></img>
        <h3 className="name">{props.nome}</h3>
        <p className="descricao">{props.descricao}</p>
      </div>
    </div>
  );
}