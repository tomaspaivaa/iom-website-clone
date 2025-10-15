
window.onload = function () {
  init();
};



function init() {
  let btnDoacaUnica = document.getElementById("btnDoacaUnica")
  let empresa = document.getElementById("empresa");
  let particular = document.getElementById("particular")
  let select = document.getElementById("select");
  let selectPagamento = document.getElementById("select-pagamento");
  let valorDoacao = document.getElementById("valorDoacao");
  let unica = document.getElementById("unica");
  let periodica = document.getElementById("periodica");
  let unicaForm = document.getElementById("unica-form");
  let periodicaForm = document.getElementById("periodica-form");
  let periodicaRadio = document.getElementById("periodica-radio");
  let doacao = document.getElementById("doacao");
  let bbtnDoacaPeriodica = document.getElementById("btnDoacaPeriodica");


  btnDoacaUnica.addEventListener("click", validarDoacaoUnica)
  empresa.addEventListener("change", isEmpresa)
  particular.addEventListener("change", isEmpresa)

  select.addEventListener("change", isQuantia)

  doacao.addEventListener("change", escolhaForm)

  escolhaForm();

  bbtnDoacaPeriodica.addEventListener("click", validarDoacaoPeriodica)
  selectPagamento.addEventListener("change", isDireto)
}

function validarDoacaoUnica() {
  let valorfinal = 0;
  // TODO: Fazer validacao
  valorfinal = Contas();
  if (valorfinal <= 40) {
    valorfinal = valorfinal / 1.5;
    valorfinal = Math.floor(valorfinal);
    alert("O seu donativo permitirá fornecer aproximadamente " + valorfinal + " refeições");
  } else {
    valorfinal = valorfinal / 3
    valorfinal = Math.floor(valorfinal);
    alert("O seu donativo permitirá alimentar diariamente " + valorfinal + " pessoas.");
  }
}

function validarDoacaoPeriodica() {
  let valorDoacao = document.getElementById("valorDoacaoPeriodica").value;

  console.log(valorDoacao);

  if (valorDoacao <= 90) {
    valorDoacao = valorDoacao / 3;
    valorDoacao = Math.floor(valorDoacao);
    alert("O seu donativo permitirá alimentar uma pessoa durante " + valorDoacao + " dias");
  } else {
    valorDoacao = valorDoacao / 90;
    valorDoacao = Math.floor(valorDoacao);
    alert("O seu donativo permitirá alimentar " + valorDoacao + " pessoas durante este mês.");
  }
}


function isEmpresa() {
  let apelido = document.getElementById("apelido");
  let empresa = document.getElementById("empresa");

  let isEmpresa = empresa.checked;
  if (isEmpresa == true) {
    apelido.style.display = "none";
  } else {
    apelido.style.display = "initial";
  }
}

function isQuantia() {
  let select = document.getElementById("select");
  let quantia = document.getElementById("quantia");

  let value = select.value;
  if (value != "custom") {
    quantia.style.display = "none";
  } else {
    quantia.style.display = "initial";
  }
}

function isDireto() {
  let selectPagamento = document.getElementById("select-pagamento");
  let iban = document.getElementById("iban")

  console.log("direto");

  let value = selectPagamento.value;
  if (value != "Direto") {
    iban.style.display = "none";
  } else {
    iban.style.display = "initial";
  }
}

function Contas() {
  let valorDoacao = document.getElementById("valorDoacao");
  let select = document.getElementById("select");
  let valorfinal = 0;

  console.log("1213");

  let valor = select.value;
  console.log(valor);
  if (valor == "custom") {
    valorfinal = valorDoacao.value;
  } else {
    valorfinal = valor;
  }
  console.log(valorfinal);
  // valorfinal = valorfinal / 1.5;

  return Math.floor(valorfinal);
}

let requiredInputs = document.querySelectorAll("[required]");
let submitButton = document.querySelector(".submit");

submitButton.disabled = true;

for (let i = 0; i < requiredInputs.length; i++) {
  requiredInputs[i].addEventListener("input", buttonState)
};

function buttonState() {
  if (requiredInputs.value === "") {
    submitButton.disabled = true;
  } else {
    submitButton.disabled = false;
  }
}

function escolhaForm() {
  let unicaForm = document.getElementById("unica-form");
  let periodicaForm = document.getElementById("periodica-form");
  let periodicaRadio = document.getElementById("periodica-radio");
  let unicaRadio = document.getElementById("unica-radio");

  console.log("1231231233213123123123");

  let escolha = unicaRadio.checked;
  if (escolha == false) {
    unicaForm.style.display = "none";
    periodicaForm.style.display = "initial";
  } else {
    unicaForm.style.display = "initial";
    periodicaForm.style.display = "none";
  }
}
