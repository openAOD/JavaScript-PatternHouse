let string="";  
let count=1;
for (let i = 1; i <=5; i++) {
    count=i;
        for (let j = 1; j <=5; j++)
            {string=string+String.fromCharCode(count+64);
            count++;}
        string=string+"\n";
        
    }
    console.log(string);
