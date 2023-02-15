import java.util.ArrayList;
import java.util.Collections;
public class day2 {
	int duplicates;
	ArrayList<String> textList;
	public static void main(String[] args) {
		
		duplicateCount("BingBong");

	}
	public static void duplicateCount(String text) {
	    // nested for loop with text.charAt(index)
		ArrayList<String> textList = new ArrayList<String>();
		int duplicate = 0;
		int dnumber= 0;
		try
		{
			for(int index = 0; index < text.length(); index++)
			{
				char letter = text.charAt(index);
				textList.add(Character.toString(letter));
				
			}
			
			Collections.sort(textList);
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
		catch (IndexOutOfBoundsException e)
		{
			;
		}
		
		System.out.println(duplicate);
	  }
	
	
	

}
