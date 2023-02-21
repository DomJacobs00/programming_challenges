/**
 * 
 * The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:
 * Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. 
 * If the list is made up of only negative numbers, return 0 instead.
 * Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.
 */



var maxSequence = function(arr){
    // if the array = 0
    if(arr.length === 0)
    {
        return 0;
    }
    let maxSum = 0;
    let currentSum = 0;
    for (i = 0; i < arr.length; i++)
    {
        currentSum = Math.max(arr[i], currentSum + arr[i]);// finds the highest number and adds it to the current
        maxSum = Math.max(maxSum, currentSum); // checks the highest number of 2 variables( max and current)
    }

    return maxSum; // returns the highest number


  }