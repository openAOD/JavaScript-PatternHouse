let string="";
let flag=true;
for (let i = 5; i >=1; i--)
    {
        for (let j = 1; j <= (5 - i); j++)
        {
           string+=" ";
        }
        for (let j = 1; j <=i;j++)
        {  
          if (flag==true)
           {if (j%2==0)
           string+="* ";
           else
           string+="# ";
           }
           else
           {
             if (j%2==0)
           string+="# ";
           else
           string+="* ";
           }
           
        }
        flag=!flag;
       string += "\n";
    }
    console.log(string);