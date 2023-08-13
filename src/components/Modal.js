import "../styles/Modal.css";
import { useState } from "react";

export default function Modal(nome) {
  const [projeto, setProjeto] = useState(1);
  //Funcionalidade do "X" da pop up
  function fechar() {
    const fundo = (document.querySelector(".FundoModal").style.display =
      "none");
  }
  // Codigo para descobrir qual projeto está sendo selecionado
  document.addEventListener("click", (e) => {
    var eTarget = e.target;
    var main = eTarget.closest("main");
    if (
      eTarget.classList.contains("fundoProjeto") ||
      eTarget.classList.contains("containerProject") ||
      eTarget.classList.contains("imgProjeto") ||
      eTarget.classList.contains("name")
    ) {
      //Deixa o pop up visivel
      var FundoModal = (document.querySelector(".FundoModal").style.display =
        "flex");
      //Aqui resgata o número do projeto
      setProjeto(main.id);
    }
  });

  function openSite() {
    window.open(nome.nome[projeto].site);
  }
  function openRepositorio() {
    window.open(nome.nome[projeto].repositorio);
  }

  console.log(nome.nome[0].site);
  return (
    <div className="FundoModal">
      <div className="modal">
        <div className="fechar">
          <p className="x" onClick={fechar}>
            X
          </p>
        </div>
        <h2>{nome.nome[projeto].nome}</h2>
        <div className="modalBTN">
          <button onClick={openRepositorio}>Repositório</button>
          <button onClick={openSite}>Site</button>
        </div>
      </div>
    </div>
  );
}
