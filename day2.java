import java.util.ArrayList;
import java.util.Collections;
public class day2 {
	int duplicates;
	ArrayList<String> textList;
	public static void main(String[] args) {
		ArrayList<String> textList = new ArrayList<String>();
		duplicateCount("BingBong");

	}
	public void duplicateCount(String text) {
	    // nested for loop with text.charAt(index)
		
		for(int index = 0; index < text.length(); index++)
		{
			char letter = text.charAt(index);
			textList.add(Character.toString(letter));
			
		}
		Collections.sort(textList);
		int numDup = 0, dupCount = 0;
		int previous = -1;
		for (int i=0; i < textList.size(); i++)
		{
			
		}
	  }
	
	
	

}
