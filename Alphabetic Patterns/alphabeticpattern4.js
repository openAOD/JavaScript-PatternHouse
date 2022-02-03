let string="";    
for (let i = 1; i <=5; i++) {
        for (let j = 5; j >=1; j--)
            string=string+String.fromCharCode(j+64);
        string=string+"\n";
    }
    console.log(string);
