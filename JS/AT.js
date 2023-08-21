const leia = require("prompt-sync")();

const codigo = [
  "COD01",
  "COD02",
  "COD03",
  "COD04",
  "COD05",
  "COD06",
  "COD07",
  "COD08",
  "COD09",
  "COD10",
];
const servico = [
  "ENTREGA DE CACHORRO DOADO",
  "BUSCA DE GATO PERDIDO",
  "BUSCA DE CACHORRO PERDIDO",
  "ADOÇÃO DE GATINHOS",
  "CASTRAÇÃO DE CACHORROS",
  "CUIDADOS VETERINÁRIOS",
  "ALIMENTAÇÃO PARA ANIMAIS RESGATADOS",
  "PROJETO DE EDUCAÇÃO AMBIENTAL",
  "PROGRAMAS DE APOIO A ANIMAIS IDOSOS",
  "SUPORTE PARA ANIMAIS COM DEFICIÊNCIA",
];
const valorDoacao = [10.0, 20.0, 25.5, 15.0, 30.0, 40.0, 10.0, 5.0, 25.0, 15.0];
const MOVIMENTO = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

const carrinho = [];

function exibirServicos() {
  console.log("Serviços Disponíveis:");
  for (let i = 0; i < codigo.length; i++) {
    console.log(
      `${codigo[i]} - ${servico[i]} (R$ ${valorDoacao[i].toFixed(2)})`
    );
  }
}

function solicitarServico(codigo) {
  const index = codigo.indexOf(codigo);
  if (index !== -1) {
    if (carrinho.length < 10 && !carrinho.includes(index)) {
      carrinho.push(index);
      console.log(`Serviço "${servico[index]}" adicionado ao carrinho.`);
    } else {
      console.log("Carrinho está cheio ou serviço já adicionado.");
    }
  } else {
    console.log("Código de serviço inválido.");
  }
}

function calcularValorDoacao() {
  let total = 0;
  for (const index of carrinho) {
    total += valorDoacao[index];
  }
  return total;
}

function exibirCarrinho() {
  console.log("Carrinho:");
  for (const index of carrinho) {
    console.log(`- ${servico[index]} (R$ ${valorDoacao[index].toFixed(2)})`);
  }
}

function main() {
  while (true) {
    console.log("\n=== Bem-vindo à ONG Proteção Animal ===");
    exibirServicos();

    const codigo = leia(
      "Digite o código do serviço desejado (ou 'sair' para finalizar): "
    );
    if (codigo === "sair") {
      console.log("Obrigado por sua doação!");
      break;
    }

    solicitarServico(codigo);
    exibirCarrinho();
    console.log(`Total a doar: R$ ${calcularValorDoacao().toFixed(2)}`);
    console.log("\n========================================");
  }
}

main();