/*
 * Each new term in the Fibonacci sequence is generated 
 * by adding the previous two terms. 
 * By starting with 1 and 2, the first 10 terms will be:
 *   	1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
 * By considering the terms in the Fibonacci sequence 
 * whose values do not exceed four million, 
 * find the sum of the even-valued terms.
 */
public class Task2 
{
	public static void main(String[] args) 
	{
		long previous = 1;
		long current = 2;
		long sum = 2;
		while(current < 4000000)
		{
			long temp = current;
			current += previous;
			previous = temp;
			if (current % 2 == 0)
				sum += current;
		}
		
		System.out.println(sum);
	}
}
