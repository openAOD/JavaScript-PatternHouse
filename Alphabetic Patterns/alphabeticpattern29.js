let string = "";
let c=5;
for (let i = 1;i<=5; i++) {
    for (let j =1; j <i; j++) 
      {      string+=" ";
      }
  for (let k = 1; k <=c; k++) {
    string += String.fromCharCode(i+64);
    
  }
  string += "\n";
  c--;
}
console.log(string);