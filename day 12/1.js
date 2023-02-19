/**
 * function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator
 *  is the number of errors and the denominator the length of the control string. 
 */

function printerError(s)
{
    var goodColors = "abcdefghijklm"; //  a predetermined string that contains correct printer colors
    var printer_errors = 0;           
    for(i = 0; i < s.length; i++)
    {
        var output = goodColors.indexOf(s.charAt(i));
        if (output < 0)
        {
            printer_errors ++; // using index of the if statement uses the value of the index to check if it is less than 0 (does not exsist in the predeterminded string)
        }
        
    }
    return printer_errors + "/" + s.length;
    printer_errors = 0;
}