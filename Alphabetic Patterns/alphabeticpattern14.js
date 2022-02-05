let string = "";

for (let i = 0; i<5; i++) {
  for (let j = 4; j >=i; j--) {
    string += String.fromCharCode(i+65);
  }
  string += "\n";
}
console.log(string);
