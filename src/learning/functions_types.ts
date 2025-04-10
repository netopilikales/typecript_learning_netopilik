// * Funkce využívající klasický zápis
function add(a: number, b: number): number {
  // * Funkce využívající klasický zápis
  const result = a + b;
  return result;
}

// * Konstantní funkce využívající šipkovou funkci
const subtract = (a: number, b: number) => {
  const result = a - b;
  return result;
};

function logText(text: string) {
  console.log(`Text: "${text}"`);
}

console.log(`Součet: ${add(1, 24)}`); // * Součet: 25
console.log(`Rozdíl: ${subtract(1, 24)}`); // * Rozdíl: -23
console.log(logText("Ahoj světe!"));
const addResult = add(4, 5);
console.log(addResult);
