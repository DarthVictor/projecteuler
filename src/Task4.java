import java.util.LinkedList;
import java.util.List;

/*
 * A palindromic number reads the same both ways. 
 * The largest palindrome made from the product of two 2-digit numbers is 9009 = 91x99.
 * Find the largest palindrome made from the product of two 3-digit numbers.
 * 
 */
public class Task4 
{
  private static boolean isPalindrome(int a)
	{
		if (a < 100000) // consider palindrome is 6-digit
			return false;
		else
		{
			String s = String.valueOf(a);
			if (s.charAt(0) == s.charAt(5) &&
				s.charAt(1) == s.charAt(4) &&
				s.charAt(2) == s.charAt(3))
				return true;
			else
				return false;
		}
	}
	public static void main(String[] args) 
	{
		
		List<Integer> list = new LinkedList<Integer>();
		
		for(int i = 999; i > 99; i--)
			for(int j = 999; j > 99; j--)
				if(isPalindrome(i*j))
					list.add(i*j);
		int max = 0;
		for(int value: list)
			if(max < value)
				max = value;
		System.out.println(max);
	}
}
