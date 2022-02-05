let string = "";

for (let i = 0;i<5; i++) {
    for (let j =4; j > i; j--) 
      {      string+=" ";
      }
  for (let k = i; k >=0; k--) {
    string += String.fromCharCode(k+65);
    
  }
  string += "\n";
}
console.log(string);