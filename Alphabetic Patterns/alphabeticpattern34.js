let string="";


    for (let i = 1; i <=5 ; i++)
    {
        for (let j = 1; j <= i; j++)
        {
            string+=" ";
        }
        for (let j = 6-i; j >=1; j--)
        {
             string += String.fromCharCode(j + 64);
             string+=" ";
        }
         string+="\n";;
    }
    console.log(string)