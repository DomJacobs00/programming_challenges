var name0 = prompt("What is your name?");
if(name0 != null && name0 != " ")
{
    document.getElementById("helloText").innerHTML = 'Hello ' + name0 + '! ';

}
else
{
    document.getElementById("helloText").innerHTML = 'None';
}