let produto = Number(prompt("Valor do produto"));
let parcelas = Number(prompt("Em quantas vezes deseja parcelar"));

const valorDaParcela = produto / parcelas;

alert(`Serão ${parcelas}x de ${valorDaParcela} sem juros`);
