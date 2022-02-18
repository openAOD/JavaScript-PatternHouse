let string="";
let  n=3;

    for(let k = 1; k <= n; k++) {
        for(let i = 1;i <= k; i++) {
            for(let j = 1;j <= i; j++) {
                string += String.fromCharCode(i + 64);
                string+=" ";
            }
            string+="\n";
        }
        
        string+="\n";
    }
    console.log(string)