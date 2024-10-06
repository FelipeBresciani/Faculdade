let salarioAtual = Number(prompt("Qual o seu salario atual?"));
let percentualDeAlmento = Number(prompt("Qual o percentual de aumento?"));

const valorAumento = (salarioAtual * percentualDeAlmento) / 100;

const novoSalario = salarioAtual + valorAumento;

alert(`seu novo salario é ${novoSalario}`);
