let string="";
let c=1;

    for (let i = 1; i <= 5; i++)
    {
        for (let j = 1; j <= (5 - i); j++)
        {
             string+=" ";
        }
        for (let j = i; j <= c; j++)
        {
             string += String.fromCharCode(j+64);
             
        }
        for (let j = i; j <= c; j++)
        {
            string += String.fromCharCode(j+48);
            
        }
         string+="\n";
         c=c+2;
         
    }
       console.log(string)