import java.util.LinkedList;
import java.util.List;

/*
 * The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17
 * 
 * Find the sum of all the primes below two million.
 */
public class Task10
{
	private static boolean dividedByElemOfArray(long number, List<Long> primes)
	{
		for(long prime: primes)
			if(number % prime == 0 && number != prime)
				return true;
		return false;
	}
	public static void main(String[] args) { //142913828922
		List<Long> primes = new LinkedList<Long>();
		primes.add(2L);
		long number = 3;
		long sum = 2;
		
		while (number < 2000000)
		{
			if (!dividedByElemOfArray(number, primes))
			{
				primes.add(number);
				sum += number;				
			}
			if (number % 20000 == 0)
				System.out.println(number);
			number++;
		}
		System.out.println(sum);
	}
}
