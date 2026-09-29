export function salvarDados() {
  const dados = {
    nome: document.getElementById("nome").value,
    email: document.getElementById("email").value,
    telefone: document.getElementById("telefone").value,
    cidade: document.getElementById("cidade").value,
    ajuda: document.getElementById("ajuda").value,
  };

  localStorage.setItem("cadastroONG", JSON.stringify(dados));
}

export function carregarDados() {
  const dadosSalvos = localStorage.getItem("cadastroONG");

  if (!dadosSalvos) return;

  const dados = JSON.parse(dadosSalvos);

  document.getElementById("nome").value = dados.nome || "";
  document.getElementById("email").value = dados.email || "";
  document.getElementById("telefone").value = dados.telefone || "";
  document.getElementById("cidade").value = dados.cidade || "";
  document.getElementById("ajuda").value = dados.ajuda || "";
}
