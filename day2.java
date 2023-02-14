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
		for(int index = 0; index < text.length(); index++)
		{
			char letter = text.charAt(index);
			textList.add(Character.toString(letter));
			
		}
		Collections.sort(textList);
		for(int out = 0; out < textList.size(); out++)
		{
			System.out.println(textList.get(out));
		}
	  }
	
	
	

}
