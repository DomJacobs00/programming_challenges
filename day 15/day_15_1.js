/**
 * Function that returns the sum of numbers between 2 integers including the integers themselves.
 */

function getSum(a, b)
{
    // finding which number is higher
    var higher = 0;
    var lower = 0;
   // using higher and lower to find the higher and lower numbers to be checked
    if(a>b || a==b)
    {
        higher = a;
        lower = b;
    }
    else
    {
        higher = b;
        lower = a;
    }
    var sum = 0;
    var currentNum = lower;
    // using currentNum add the numbers to sum using a for loop
    for(i=lower; i <= higher; i++)
    {
        
        sum = sum + currentNum;
        currentNum ++; 
        
    }
    console.log(sum);
    return sum;
}
getSum(-294, -288)