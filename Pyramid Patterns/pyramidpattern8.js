let string="";
for (let i = 5; i >=1; i--)
    {
        for (let j = 1; j <= (5 - i); j++)
        {
           string+=" ";
        }
        for (let j = i; j >=1; j--)
        {
          string += String.fromCharCode(j+48);
           string+=" ";
        }
       string += "\n";
    }
    console.log(string);