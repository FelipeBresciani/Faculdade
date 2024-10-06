let numero1 = Number(prompt("Insira o primeiro Numero"));
let numero2 = Number(prompt("Insira o segundo Numero"));
let numero3 = Number(prompt("Insira o terceiro Numero"));

let maior;

if (numero1 > numero2 && numero1 > numero3) {
  maior = numero1;
}
if (numero2 > numero1 && numero2 > numero3) {
  maior = numero2;
}
if (numero3 > numero1 && numero3 > numero2) {
  maior = numero3;
} else alert("os numeros são iguas");

let menor;

if (numero1 < numero2 && numero1 < numero3) {
  menor = numero1;
}
if (numero2 < numero1 && numero2 < numero3) {
  menor = numero2;
}
if (numero3 < numero1 && numero3 < numero2) {
  menor = numero3;
}

alert(`O maior é o ${maior} e o menor é o ${menor}`);
