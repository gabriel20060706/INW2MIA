const leia = require("prompt-sync")();

let alunos = ["Marcos", "Paulo", "Maria"];
let notas = [0, 0, 0];
let situacao;
let matriculas = ["MAT01", "MAT02", "MAT03"];

// notas[0] = 5;
// notas[1] = 6;
// notas[2] = 9;

for (let i = 0; i < 3; i++) {
  notas[i] = parseInt(leia("Digite a nota do aluno: "));
}

console.log("MAT\tALUNO\tNOTA\tSITUAÇÂO");

for (let i = 0; i < alunos.length; i++) {
  if (notas[i] >= 5) {
    situacao = "Aprovado";
  } else {
    situacao = "Reprovado";
  }

  console.log(
    matriculas[i] + "\t" + alunos[i] + "\t" + notas[i] + "\t" + situacao
  );
}