let string="";
let  n=3;
let y=2;
for(let k = 0; k < y; k++) {
        for(let i = 1;i <= n; i++) {
            for(let j = 1;j <= i; j++) {
                 string += String.fromCharCode(i + 64);
                string+=" ";
            }
            string+="\n";
        }
    }
    console.log(string)