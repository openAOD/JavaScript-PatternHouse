let string = "";

for (let i = 0;i<=4; i++) {
  for (let j = 0; j <=(4-i); j++) {
    string += String.fromCharCode(4-j+i+65);
  }
  string += "\n";
}
console.log(string);