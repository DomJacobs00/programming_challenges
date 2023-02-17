// 1. number input     xyz
// 2. number converted to string and seperated into characters [x,y,z]
// 3. characters converted into singular int and multiplied x*y*z = ab
// 4. repeat steps 2 and 3 until the answer is a single digit and record number of loops required to get to that point


var num = 1936923;
function persistance(num)
{
    var persist = 0;
    var numArray = [];
    while(true)
    { 
        var num2string =  num.toString();
        if(num2string.length == 1)
        {
            false;
            return persist;
            break;
        }
        else
        {
            for(i=0; i<num2string.length; i++) // parses trhough the number and collects it inside an array
            {
                var string2num = parseInt(num2string.charAt(i));
                numArray.push(string2num);
                
            
            }
            // numArray needs to be multiplied and the num changed to new value
            var newnum = 1;
            for(a=0; a<numArray.length; a++)
            {
                newnum *= numArray[a];
            } 
            persist ++;
            num = parseFloat(newnum.toFixed(0));
            numArray.splice(0, numArray.length);

        }       
        
    }
}
    
    
    
