let string="";
    for (let i = 1; i <= 5; i++)
    {
        for (let j = 1; j <= (5 - i); j++)
        {
             string+=" ";
        }
        for (let j = 1; j <= i; j++)
        {
             string += String.fromCharCode(i+64);
        }
        for (let j = 1; j <= i; j++)
        {
            string += String.fromCharCode(i+ 48);
        }
         string+="\n";
    }
       console.log(string)