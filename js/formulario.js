import { salvarDados, carregarDados } from "./storage.js";

export function configurarFormulario() {
  const formulario = document.querySelector("form");

  if (!formulario) return;

  carregarDados();

  Inputmask("999.999.999-99").mask("#cpf");
  Inputmask("(99)99999-9999").mask("#telefone");
  Inputmask("99999-999").mask("#cep");

  formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    const mensagem = document.getElementById("mensagem-formulario");

    mensagem.textContent = "";
    mensagem.className = "";

    if (!formulario.checkValidity()) {
      formulario.reportValidity();

      mensagem.textContent = "Preencha todos os campos corretamente.";
      mensagem.classList.add("erro");
      return;
    }

    mensagem.textContent = "Cadastro realizado com sucesso!";
    mensagem.classList.add("sucesso");

    salvarDados();
  });
}
