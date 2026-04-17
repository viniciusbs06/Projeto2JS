let alunos = [];

function calcularNota() {
  let nome = document.getElementById("nome").value;
  let nota1 = parseFloat(document.getElementById("nota1").value);
  let nota2 = parseFloat(document.getElementById("nota2").value);

  if (!nome || isNaN(nota1) || isNaN(nota2)) {
    alert("Preencha todos os campos corretamente!");
    return;
  }

  let media = (nota1 + nota2) / 2;
  let situacao = media >= 7 ? "Aprovado" : "Reprovado";

  let aluno = {
    nome,
    nota1,
    nota2,
    media,
    situacao
  };
  alunos.push(aluno);

  modificarTabela();
  atualizarAlunosNota10();
  limparCampos();
}

function modificarTabela() {
  let tabela = document.getElementById("arrayAlunos");
  tabela.innerHTML = "";

  alunos.forEach(aluno => {
    let linha = `
      <tr>
        <td>${aluno.nome}</td>
        <td>${aluno.nota1}</td>
        <td>${aluno.nota2}</td>
        <td>${aluno.media.toFixed(2)}</td>
        <td>${aluno.situacao}</td>
      </tr>
    `;
    tabela.innerHTML += linha;
  });
}

function atualizarAlunosNota10() {
  let lista = document.getElementById("alunosNota10");
  lista.innerHTML = "";

  let alunosMax = alunos.filter(aluno => aluno.media === 10);

  alunosMax.slice(0, 5).forEach(aluno => {
    let item = `<li>${aluno.nome}</li>`;
    lista.innerHTML += item;
  });
}

function limparCampos() {
  document.getElementById("nome").value = "";
  document.getElementById("nota1").value = "";
  document.getElementById("nota2").value = "";
}
function validarNotas(nota1, nota2) {
  if (nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10) {
    alert("A nota deve estar entre 0 e 10.");
    return false;
  }
  return true;
}