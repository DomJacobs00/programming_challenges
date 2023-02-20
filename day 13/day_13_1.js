function likes(names)
{ 
    var singular = " likes  this";
    var multiple = " like  this";
    if(names.len == 0)
    {
        return "no one "+singular;
    }
    if(names.len == 1)
    {
        return names[0] +" "+singular;
    }
    if(1 < names.len < 3)
    {
        return names[0] + ", " + names[1] + multiple;
    }
    else
    {
        var remainder = names.length -2;
        return names[0] + ", " + names[1]+ " and "+ remainder + " others "  + multiple;
    }

}
test0 = ['Max', 'John', 'Mark'];
test1 = ['Max'];
test2 = ['John', 'Mark'];
