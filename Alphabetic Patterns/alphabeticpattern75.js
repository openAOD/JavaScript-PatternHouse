let string="";
 for (let i = 1; i <= 5; i++)
    {
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