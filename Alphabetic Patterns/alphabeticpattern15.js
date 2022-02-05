let string = "";

for (let i = 4; i>=0; i--) {
  for (let j = 0; j <=i; j++) {
    string += String.fromCharCode(j+65);
  }
  string += "\n";
}
console.log(string);
