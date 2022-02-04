let string="";    
for (let i = 5; i >=1; i--) {
        for (let j = 1; j <= 5; j++)
            string=string+String.fromCharCode(i+64);
        string=string+"\n";
    }
    console.log(string);
