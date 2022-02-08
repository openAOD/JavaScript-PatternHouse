let string = "";

for (let i = 0;i<=4; i++) {
  for (let j = 4-i; j >=0; j--) {
    string += String.fromCharCode(j+65);
  }
  string += "\n";
}
console.log(string);