let n = 5;
let string = "";
// External loop
for (let i = 1; i <= n; i++) {
  // creating spaces
  for (let j = 1; j < i; j++) {
    string += " ";
  }
  // creating alphabets
  for (let k = 0; k < 2 * (n - i + 1) - 1; k++) {
    string += String.fromCharCode(k + 65);
  }
  string += "\n";
}
console.log(string);