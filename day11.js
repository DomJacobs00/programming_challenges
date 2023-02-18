
/**
 * Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.
 */
function towerBuilder(nFloors)
{
    var floor = [];
    var towerBlock = "*";
    var len = 1;
    var maxWidth = 2 * nFloors -1;
    // using  a nested for loop building a tree
    for (i = 0; i<nFloors; i++)
    {
        // for every floor 2 stars need to be added
        for (k = 0; k<len; k++)
        {
            floor.push(towerBlock);
        }
        
        var padding = " ".repeat((maxWidth - floor.length)/2);
        var out = padding + floor.join('')+padding;
        console.log(out);
        len = len + 2;
        floor = [];
    }
    
}
towerBuilder(3);