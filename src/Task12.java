import java.util.LinkedList;
import java.util.List;

/*
 * The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17
 * 
 * Find the sum of all the primes below two million.
 */
public class Task12
{
	public static int getTriangleNumber(int n) {
		return n*(n+1)/2;
	}
	public static int triangleNumberDevisors(int n){
		int devisors = 2;
		int halfN = n /2;
		for(int i = 2; i <= halfN; i++){
			if(n % i == 0) devisors++;
		}
		return devisors;
	}

	public static void main(String[] args) { 
		long t0 = System.currentTimeMillis();
		int triangleNumber = 1;
		int maxDevisors = 2;
		int currentDevisors = 2;
		for(int i = 2; currentDevisors < 500; i++){
			triangleNumber += i;
			currentDevisors = triangleNumberDevisors(triangleNumber);
			if(maxDevisors < currentDevisors){
				maxDevisors = currentDevisors;
				System.out.println(i + " " + triangleNumber + " " + currentDevisors);
			}
			if(i % 1000 == 0){
				System.out.println("i = " + i + ", time elapsed " + (System.currentTimeMillis() - t0) + "ms");
			}
		}
	}
}
