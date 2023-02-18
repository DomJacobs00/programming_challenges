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
    tempArray.sort(function(a,b){return a - b});
    var max = tempArray[tempArray.length-1];
    var min = tempArray[0];
    console.log("min:  "+min);
    console.log("max: "+max );
    return[min,max];
}

testarray = [1,2,3,4,5,6,7,8,9,1,1,1,1,1123123];
minMax(testarray);