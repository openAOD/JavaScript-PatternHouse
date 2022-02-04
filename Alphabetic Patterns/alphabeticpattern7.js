let string="";  

for (let i = 0; i<5; i++) {
    
        for (let j = 0; j <5; j++)
            {string=string+String.fromCharCode(i + j * 5 + 65);
            }
        string=string+"\n";
        
    }
    console.log(string);
