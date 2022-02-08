let string = "";

for (let i = 0;i<5; i++) {
    for (let j =4; j > i; j--) 
      {      string+=" ";
      }
  for (let k = 0; k <=i; k++) {
    string += String.fromCharCode(i+65);
    
  }
  string += "\n";
}
console.log(string);