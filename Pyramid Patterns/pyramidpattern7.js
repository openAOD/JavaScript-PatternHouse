let string="";
for (let i = 5; i >=1; i--)
    {
        for (let j = 1; j <= (5 - i); j++)
        {
           string+=" ";
        }
        for (let j = 1; j <= i; j++)
        {
          string += String.fromCharCode(i+48);
           string+=" ";
        }
       string += "\n";
    }
    console.log(string);