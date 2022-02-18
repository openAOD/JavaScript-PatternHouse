let string="";
let  n=3;
let c=1;
    for(let k = 1; k <= n; k++) {
        for(let i = 1;i <= k; i++) {
            for(let j = 1;j <= i; j++) {
                string += String.fromCharCode(c + 64);
                string+=" ";
            }
            string+="\n";
        }
        c++;
        string+="\n";
    }
    console.log(string)