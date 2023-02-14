
public class day1 {
	public static void main(String[] args) {
		isNarcissistic(153);

	}
    public static boolean isNarcissistic(int number) {
        String num = String.valueOf(number);
        int sum = 0;
        boolean answer = false;
        for(int i=0; i < num.length(); i++)
        {
            int j = Character.digit(num.charAt(i), 10);
            int power = (int) Math.pow(j, num.length());
            sum = sum + power;
        }
        if(sum == number)
        {
        	answer = true;
        }
        else
        {
        	answer = false;
        }
    
    
        return answer;
    }

}
