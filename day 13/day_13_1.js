function likes(names)
{ 
    var singular = "likes this";
    var multiple = "like this";
    if(names.length == 0)
    {
        var out = "no one "+singular;
        return out;
    }
    if(names.length == 1)
    {
        var out = names[0] +" "+singular;
        return out;
    }
    if(names.length == 2)
    {
        var out = names[0] + " and " + names[1] +" "+ multiple;
        return out;
    }
    if(names.length == 3)
    {
        var out = names[0] +", "+ names[1]+ " and " + names[2] +" "+ multiple;
        return out;
    }
    else
    {
        var remainder = names.length -2;
        var out = names[0] + ", " + names[1]+ " and "+ remainder + " others "  + multiple;
        return out;
    }

}
function likesnew(names)
{
    names = names || []; // initializes the array if it is currently unidentified
    // using switch instead of many if loops
    switch(names.length)
    {//using the length of the array for each case makes the task quick and efficient
        case 0: return 'no one likes this'; break;
        case 1: return names[0] + ' likes this'; break;
        case 2: return names[0] + ' and ' + names [1] + ' like this'; break;
        case 3: return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this'; break;
        default: return names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others like this'; // if no match this case is used
    }
}
test = [];
test0 = ['Max', 'John', 'Mark'];
test1 = ['Max'];
test2 = ['John', 'Mark'];
likes(test);
