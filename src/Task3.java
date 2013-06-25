/*
 * The prime factors of 13195 are 5, 7, 13 and 29.
 * What is the largest prime factor of the number 600851475143 ?
 */
public class Task3 
{
  private static long number = 600851475143L; 
	public static void main(String[] args) 
	{
		long maxPrime = 0;
		for(long i = 3; i <= number; i+=2 )
		{
			if (number % i == 0)
			{
				maxPrime = i;
				number /= i;
			}
		}
		System.out.println(maxPrime);
	}
}
