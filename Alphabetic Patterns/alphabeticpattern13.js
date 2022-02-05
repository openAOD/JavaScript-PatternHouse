let string = "";

for (let i = 0; i<5; i++) {
  for (let j = i; j >=0; j--) {
    string += String.fromCharCode(j+65);
  }
  string += "\n";
}
console.log(string);
