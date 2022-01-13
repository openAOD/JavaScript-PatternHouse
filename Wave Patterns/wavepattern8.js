let i, j, k, e, n, count, x;
let string = "";
		e = 2;
		x = 1;

		// for loop for height
		// of wave
		for (i = 0; i < 5; i++)
		{
			for (j = 5; j <= 5 + i; j++)
                    string += " ";

			// for loop for wave
			// length
			for (count = 1; count <= 5; count++)
			{
			
				// checking for intermediate
				// spaces
				for (n = (5 + 5 - 2); n >= x; n--)
                        string += " ";

				for (k = 1; k <= e; k++)
				{
					if (k == 1)
                         string += "/";
					else if (k == e)
                        string += "\\";
					else
                        string += " ";
				}
			}

			// incrementing counters
			// value by two
			x = x + 2;
			e = e + 2;

			string += "\n";
        }
        console.log(string);