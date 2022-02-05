let string = "";

for (let i = 5;i>0; i--) {
    for (let j =1; j <=(i-1); j++) 
      {      string+=" ";
      }
  for (let k = 1; k <=(6-i); k++) {
    string += String.fromCharCode(i+64);
    
  }
  string += "\n";
}
console.log(string);