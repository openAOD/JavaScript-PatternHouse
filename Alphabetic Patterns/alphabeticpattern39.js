let string="";

let c=1;
    
    for (let i=1;i<=5;i++)
    {
      
        for (let j = 1; j <= (5 - i); j++)
        {
            string+=" ";
        }
      for (let j = c; j >= 1; j--)
        {
             string += String.fromCharCode(j+ 64);
             
        }
         string+="\n";
         c+=2;
    }
    console.log(string)