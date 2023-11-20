let qtdVitorias = parseInt(prompt('Digite o número de vitórias: '));
let qtdDerrotas = parseInt(prompt('Digite o número de derrotas: '));
let saldoVitorias;
let nivel;

function calculaRank(qtdV, qtdD) {
  saldoVitorias = qtdV - qtdD;
  if (saldoVitorias <= 10) {
    nivel = 'Ferro';
    return;
  } else if (saldoVitorias >= 11 && saldoVitorias <= 20) {
    nivel = 'Bronze';
    return;
  } else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
    nivel = 'Prata';
    return;
  } else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
    nivel = 'Ouro';
    return;
  } else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
    nivel = 'Diamante';
    return;
  } else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
    nivel = 'Lendário';
    return;
  } else {
    nivel = 'Imortal';
    return;
  }
}

calculaRank(qtdVitorias, qtdDerrotas);
console.log(
  'O herói tem o saldo de ' +
    saldoVitorias +
    ' vitórias e está no nível ' +
    nivel
);
