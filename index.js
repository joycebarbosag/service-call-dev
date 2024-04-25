const url = "https://parseapi.back4app.com/classes/Chamado";
const headers = {
  "X-Parse-Application-Id": "647whPgPd6ViTyps0MYp6s6ctJ3hwAWbqd0bTA8D",
  "X-Parse-REST-API-Key": "QnU751n2ZgOP9aiFxFhL3RHAKiXBsuP2rlajHLRJ",
};
const headersJson = {
  ...headers,
  "Content-Type": "application/json",
};

const criarChamados = async (chamado) => {
  const requestOptions = {
    method: "POST",
    headers: headersJson,
    body: JSON.stringify({ 
      email: chamado.email, 
      nome: chamado.nome, 
      senha: chamado.senha, 
      assunto: chamado.assunto, 
      mensagem: chamado.mensagem, 
      finalizado: chamado.finalizado 
    }),
  };

  try {
    await fetch(url, requestOptions);
    clear();
  } catch (error) {
    console.error('Error:', error);
  }
};

const button = document.getElementById('btnAbrirChamado');
const emailInput = document.querySelector("#email");
const nomeInput = document.querySelector("#name");
const senhaInput = document.querySelector("#senha");
const assuntoInput = document.querySelector("#title");
const textArea = document.querySelector("#mensagem");

button.addEventListener('click', (e) => {
  const chamado = {
    email: emailInput.value,
    nome: nomeInput.value,
    senha: senhaInput.value,
    assunto: assuntoInput.value,
    mensagem: textArea.value,
    finalizado: false
  };

  criarChamados(chamado);
});

const clear = () => {
  emailInput.value = "";
  nomeInput.value = "";
  senhaInput.value = "";
  assuntoInput.value = "";
  textArea.value = "";
};