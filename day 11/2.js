/**
 * Write a function that returns both the minimum and maximum number of the given list/array.
 */



function minMax(arr)
{
    var tempArray = [];
    for(i=0; i<arr.length; i++)
    {
        tempArray.push(arr[i]);
    }
    console.log(tempArray.length);
    var max = 0;
    var min = 0;
    return[max,min];
}

testarray = [1,2,3,4,5,6,7,8,9,1,1,1,1,1123123,];
minMax(testarray);