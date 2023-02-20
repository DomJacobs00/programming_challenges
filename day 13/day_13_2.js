/**
 * 
 * @param str1 String containing the letters that need to be matched with the str 2 to return true or false
 * @param str2 String containing the word
 * @returns 
 */
function scramble(str1, str2) 
{
    var outlook = false;
    for(i=0; i<str2.length; i++)
    {
        for(k=0; str1.length; k++)
        {
            var chAr = str2[i];
            if(chAr.indexOf(str1.charAt(k))<0)
            {
                 false;
                break;
            }
            else
            {
                ;
            }

        }
    }
    outlook = true;
    
    
    
    
    
    return outlook;
}