const adicionarDiv = (texto, tipo) => {
  const newDiv = document.createElement("div");

  newDiv.textContent = texto;

  if (tipo) {
    newDiv.classList.add(tipo);
  }
  document.getElementById("teste").appendChild(newDiv);
};

const calPrice = () => {
  const temp = Number(document.getElementById("tempo").value);
  if (temp >= 1 && temp < 3) {
    const valor = `O valor da hora pra quem fica até 2 horas é 5 reais a hora, e voce ficou ${temp} horas dando R$${
      temp * 5
    }`;
    adicionarDiv(valor, "preço");
  }
  if (temp >= 3 && temp < 6) {
    const valor = `O valor da hora pra quem ficou entre 3 a 6 horas é 4,5 reais a hora, e voce ficou ${temp} horas dando R$${
      temp * 4.5
    }`;
    adicionarDiv(valor, "preço");
  }
  if (temp >= 6 && temp < 10) {
    const valor = `O valor da hora pra quem ficou entre 6 a 10 horas é 4 reais a hora, e voce ficou ${temp} horas dando R$${
      temp * 4
    }`;
    adicionarDiv(valor, "preço");
  }
  if (temp >= 10) {
    const valor = `O valor da hora pra quem ficou mais de 10 horas é 3,5 reais a hora, e voce ficou ${temp} horas dando R$${
      temp * 3.5
    }`;
    adicionarDiv(valor, "preço");
  }
};
