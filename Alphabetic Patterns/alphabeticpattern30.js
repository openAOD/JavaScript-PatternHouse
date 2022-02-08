let string = "";
let c=5;
for (let i = 1;i<=5; i++) {
    for (let j =1; j <i; j++) 
      {      string+=" ";
      }
  for (let k = c; k >=1; k--) {
    string += String.fromCharCode(k+64);
    
  }
  string += "\n";
  c--;
}
console.log(string);