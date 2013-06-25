/*
The sum of the squares of the first ten natural numbers is,

12 + 22 + ... + 102 = 385
The square of the sum of the first ten natural numbers is,

(1 + 2 + ... + 10)2 = 552 = 3025
Hence the difference between the sum of the squares of the 
first ten natural numbers and the square of the sum is 3025  385 = 2640.

Find the difference between the sum of the squares of the first one hundred
natural numbers and the square of the sum.

 */
public class Task5 
{
  public static void main(String[] args) 
	{
		long sumOfSquares = 0;
		for (long i = 1; i <= 100; i++)
			sumOfSquares += i*i;
		long squareOfSum = (100+1)*50*(100+1)*50;
		System.out.println(squareOfSum-sumOfSquares);
	}
}
