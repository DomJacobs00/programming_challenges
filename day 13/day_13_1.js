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
test = [];
test0 = ['Max', 'John', 'Mark'];
test1 = ['Max'];
test2 = ['John', 'Mark'];
likes(test);
