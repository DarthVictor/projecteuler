import java.math.BigInteger;

/*
 * The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17
 * 
 * Find the sum of all the primes below two million.
 */
public class Task14
{
	public static int getChainLengthBit(int n){
        long currentNumber = n;
        int chainLength = 1;
        //var chain = []
        while(currentNumber > 1){
            if((currentNumber % 2) > 0){
                currentNumber = 3*currentNumber + 1;
            }
            else{
                currentNumber = currentNumber  / 2;
            }
            chainLength += 1;
            //chain.push(currentNumber)
        }
        //console.log(chain)
        return chainLength;
    }

	public static int getChainLengthBigNumber(int n){
        BigInteger currentNumber = new BigInteger("" + n);
        BigInteger one = BigInteger.ONE;
        BigInteger two = new BigInteger("2");
        BigInteger three = new BigInteger("3");
        int chainLength = 1;
        //var chain = []
        while(currentNumber.compareTo(one) > 0){
            if(currentNumber.mod(two).compareTo(BigInteger.ZERO) > 0){
                currentNumber = currentNumber.multiply(three).add(one);
            }
            else{
                currentNumber = currentNumber.divide(two);
            }
            chainLength += 1;
            //chain.push(currentNumber)
        }
        //console.log(chain)
        return chainLength;
    }


	public static void main(String[] args) { 
		long t0 = System.currentTimeMillis();

        int i;
        int maxChain = 1;
        int chainLength;
        for(i = 1; i<=10000000; i++){
            chainLength = getChainLengthBit(i);
            if(chainLength > maxChain){
                maxChain = chainLength;
                System.out.println(i + ", " +  maxChain);
            }
        }
        System.out.println("Finally maxChain = " +  maxChain);

	}
}
