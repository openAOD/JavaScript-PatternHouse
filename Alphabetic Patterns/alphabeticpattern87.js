let string="";
 for (let i = 5; i >= 1; i--)
    {   
      for (let j = 1; j <= (5 - i); j++)
        {
            string+=" ";
        }
        for (let j = 1; j <= i; j++)
        {
            if (i % 2 == 0)
            {
                string += String.fromCharCode(j+64);
            }
            else
            {
                string += String.fromCharCode(j+48);
            }
        }
       string += "\n";
    }

    console.log(string);