/**
 * Finding a missing term in an Arithmetic progression
 */
var findMissing = function (list)
{
    const n = list.length + 1;                                  // Calculate the total number of elements in the sequence, including the missing one                  
    const a = list[0];                                          // Get the first element of the sequence
    const b = list[list.length - 1];                            // Get the last element of the sequence
    const totalSum = list.reduce((acc , val) => acc + val , 0); // Calculate the sum of all elements in the sequence
    const expectedSum = ( n / 2) * ( a + b );                   // Calculate the sum of the sequence if no elements were missing
    var ha =  expectedSum - totalSum;                           // Subtract the actual sum from the expected sum to get the missing element
    return ha;
}

