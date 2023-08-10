import "../styles/welcome.css";
import gitImg from "../imgs/github.png";
import linkedinImg from "../imgs/linkedin.png";
import curriculoImg from "../imgs/curriculo.png";

export default function Welcome() {
  return (
    <div className="container">
      <div className="link">
        <h1 className="funcao">
          <span className="REACT">REACT</span>
          <span className="links">
            <a
              href="https://github.com/Vinicius231?tab=repositories"
              className="redeSocial"
            >
              <img src={gitImg}></img>
            </a>
            {/* Não esquecer dessa parte */}
            <a href="https://www.linkedin.com/in/vinicius-manoel-156a66285/" className="redeSocial">
              <img src={linkedinImg}></img>
            </a>
            {/* Não esquecer dessa parte */}
            <a href="https://chat.openai.com/" className="redeSocial">
              <img src={curriculoImg}></img>
            </a>
          </span>
          <br></br>
          <span className="DEVELOPER">DEVELOPER</span>
          <br></br>
        </h1>
      </div>
    </div>
  );
}
