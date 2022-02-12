let string="";
for (let i = 5; i >=1; i--)
    {
        for (let j = 1; j <= i; j++)
        {
            string += String.fromCharCode(j+64);
        }
         for (let j = (5 - i); j >= 1; j--)
        {
           string+="*";
        }
       string += "\n";
    }
    console.log(string);