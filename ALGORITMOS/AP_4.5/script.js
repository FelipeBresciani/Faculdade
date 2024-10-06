let result = 0;

for (let i = 0; i <= 50; i++) {
  if (i % 2 === 0) {
    result += i;
  }
}
document.write(`<p> ${result} <p>`);
