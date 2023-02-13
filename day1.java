public class day1 {
    public static boolean isNarcissistic(int number) {
        String num = String.valueOf(number);
        int sum = 0;
        boolean answer = false;
        for(int i=0; i < num.length(); i++)
        {
            int j = Character.digit(num.charAt(i), 10);
            sum = sum + (j^num.length());
        }
        System.out.println(sum="                  "+num)
    
    
        return answer;
    }

}
