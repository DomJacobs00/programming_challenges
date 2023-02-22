/**
 * Function that returns the sum of numbers between 2 integers including the integers themselves
 */

function getSum(a, b)
{
    // finding which number is higher
    higher = 0;
    lower = 0;
   
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
    sum = 0;
    currentNum = lower;

    for(i=lower; i <= higher; i++)
    {
        
        sum = sum + currentNum;
        currentNum ++; 
        
    }
    console.log(sum);
    return sum;
}
getSum(-294, -288)