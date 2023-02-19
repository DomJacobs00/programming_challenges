/**
 * Given an array (which will have a length of at least 3, but could be very large) containing integers.
 * The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N.
 *  Write a method that takes the array as an argument and returns this "outlier" N.
 * The method essentially takes the array of integers checks if the numbers are even or odd and adds them to the respective arrays.
 * Once all numbers are sorted the arrays are compared and the one with the smallest size is returned
 */
function findOutlier(integers)
{
    even = [];
    odd = [];
    for( i= 0; i<integers.length; i++)
    {
        if(integers[i]%2 === 0) // checks if the number is even
        {
            even.push(integers[i]);
        }
        else
        {
            odd.push(integers[i]);
        }
    }
    if(even.length > odd.length) // after going through the array of given numbers, statement checks which array is shorter and returns the shorter one
    {
        console.log(odd[0]);
        return odd[0];
        
    }
    else
    {
        console.log(even[0]);
        return even[0];
    }

}
tester = [0,1,2,3];
findOutlier(tester);