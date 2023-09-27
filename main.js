const form = document.getElementById("form-section");

function validaCampo(valorA, valorB) {
  return valorB > valorA;
}

form.addEventListener("submit", function (e) {
  let formValido;
  e.preventDefault();

  const valorA = document.getElementById("campoA").value;
  const valorB = document.getElementById("campoB").value;
  const confirmacao = `O campo B (<b>${valorB}</b>) é maior que o Campo A (<b>${valorA}</b>) => <b>${valorB}</b> > <b>${valorA}</b>`;

  formValido = validaCampo(valorA, valorB);

  if (formValido) {
    const mensagemDeSucesso = document.querySelector(".success-message");
    mensagemDeSucesso.innerHTML = confirmacao;
    mensagemDeSucesso.style.display = "block";

    document.getElementById("campoA").value = "";
    document.getElementById("campoB").value = "";
  } else {
    const mensagemDeError = document.querySelector(".error-messsage");
    mensagemDeError.innerHTML = `O campo B (<b> ${valorB}</b>) é menor que o Campo A (<b> ${valorA}</b>) => <b>${valorB}</b> < <b>${valorA}</b>`;
    mensagemDeError.style.display = "block";

    document.getElementById("campoA").value = "";
    document.getElementById("campoB").value = "";
  }
});
console.log(form);
