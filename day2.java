import java.util.ArrayList;
import java.util.Collections;
public class day2 {
	int duplicates;
	ArrayList<String> textList;
	public static void main(String[] args) {
		
		duplicateCount("BingBong");

	}
	/**
	 * 
	 * duplicateCount() takes a string and calculates the letters that recur on the string
	 * This is achieved by using a for loop that parses through the String that is separated into characters that are stored in an arrayList
	 */
	public static void duplicateCount(String text) {
	    // nested for loop with text.charAt(index)
		ArrayList<String> textList = new ArrayList<String>();
		int duplicate = 0;
		int dnumber= 0;
		try
		{
			for(int index = 0; index < text.length(); index++)// Separates the text into characters that can be sorted
			{
				char letter = Character.toLowerCase(text.charAt(index)); // making all the characters lower case removes case sensitivity
				textList.add(Character.toString(letter));
				
			}
			
			Collections.sort(textList);
			/**
			 * Using a for loop that compares current character and the next character. If the characters are equal to
			 *  each other the number of duplicates increase as well as the number of the current duplicates.
			 * Every time the characters do not match dnumber changes to 0, until the next group of duplicates is found.
			 */
			for(int out = 0; out < textList.size(); out++)
			{
				String curChar = textList.get(out);
				String nextChar = textList.get(out+1);
				System.out.println(textList.get(out));
				if (curChar.equals(nextChar))
				{
					if(dnumber == 0)
					{
						System.out.println("Duplicate" + curChar);
						duplicate = duplicate+1;
						dnumber = dnumber +1;
					}
					else
					{
						;
					}
				}
				else
				{
					dnumber = 0;
				}
			}
		}
		catch (IndexOutOfBoundsException e) // Due to nextChar getting out of bounds error handling is necessary.
		{
			;
		}
		
		System.out.println(duplicate);
	  }
	
	
	

}
