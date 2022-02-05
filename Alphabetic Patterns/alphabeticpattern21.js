let string = "";
let c=0;
for (let i = 0;i<=4; i++) {
  for (let j = 0; j <=i; j++) {
    string += String.fromCharCode(c+65);
    c++;
  }
  string += "\n";
}
console.log(string);