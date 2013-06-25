/*
 * By listing the first six prime numbers:
 * 2, 3, 5, 7, 11, and 13, we can see that 
 * the 6th prime is 13.
 * What is the 10001st prime number?
 */
public class Task7
{
	private static boolean dividedByElemOfArray(long number, long[] primes, int length)
	{
		for(int i = 0; i < length; i++)
			if(number % primes[i] == 0 && number != primes[i])
				return true;
		return false;
	}
	public static void main(String[] args) {
		long[] primes = new long [10001];
		primes[0] = 2;
		int i = 1;
		long number = 3;
		
		while (i < 10001)
		{
			if (!dividedByElemOfArray(number, primes, i))
			{
				primes[i++] = number;
				System.out.println(number);
			}
			number++;
		}
		
	}
}
