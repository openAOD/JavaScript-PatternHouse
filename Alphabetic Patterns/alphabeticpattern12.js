let string = "";

for (let i = 4; i >=0; i--) {
  for (let j = 5; j >=i+1; j--) {
    string += String.fromCharCode(i+65);
  }
  string += "\n";
}
console.log(string);
