function showLoginForm(tipo) {
  const body = document.body;
  const leftSide = document.querySelector(".left-side");
  const rightSide = document.querySelector(".right-side");
  const form = document.getElementById("form-login");

  // Marca layout de login
  body.classList.add("login-layout");
  leftSide.classList.add("small-left");

  // Atualiza mensagem do lado esquerdo
  leftSide.innerHTML = `
    <div class="welcome-box">
      <h1>${tipo === "cliente" ? "Cliente" : "Funcionário"}</h1>
      <p>${tipo === "cliente"
        ? "Entre com seus dados e acesse sua conta como cliente."
        : "Faça login para acessar o sistema como funcionário."}</p>
    </div>
  `;

  // Atualiza título e tipo no form
  document.getElementById("form-titulo").textContent = `Login ${tipo === "cliente" ? "Cliente" : "Funcionário"}`;
  document.getElementById("tipo").value = tipo;

  // Mostra formulário e esconde botões
  document.getElementById("botaoCliente").style.display = "none";
  document.getElementById("botaoFuncionario").style.display = "none";
  form.style.display = "flex";
}

// Voltar ao início ao clicar na logo
document.addEventListener("DOMContentLoaded", () => {
  const logoLink = document.querySelector(".logo-link");
  logoLink.addEventListener("click", (e) => {
    e.preventDefault(); // Evita rolagem para o topo

    const body = document.body;
    const leftSide = document.querySelector(".left-side");
    const form = document.getElementById("form-login");

    // Remove classes e volta ao estado inicial
    body.classList.remove("login-layout");
    leftSide.classList.remove("small-left");

    leftSide.innerHTML = `
      <div class="welcome-box">
        <h1>Bem-vindo!</h1>
        <p>Acesse o sistema de forma segura com autenticação criptografada.</p>
      </div>
    `;

    // Mostrar os botões, esconder formulário
    document.getElementById("botaoCliente").style.display = "inline-block";
    document.getElementById("botaoFuncionario").style.display = "inline-block";
    form.style.display = "none";
  });
});
