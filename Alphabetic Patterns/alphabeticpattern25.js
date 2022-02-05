let string = "";

for (let i = 5;i>0; i--) {
    for (let j =i; j > 1; j--) 
      {      string+=" ";
      }
  for (let k = i; k <=5; k++) {
    string += String.fromCharCode(k+64);
    
  }
  string += "\n";
}
console.log(string);