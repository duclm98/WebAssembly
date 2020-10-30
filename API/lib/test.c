unsigned long int sum(n){
    unsigned long int result = 0;
    if (n <= 0) {
        return n;
    }
    for (int i = 0; i < n; i++) {
        unsigned long int multiple = 1;
        for (int j = 1; j < i; j++) {
            multiple = multiple * j;
        }
        result = result + multiple;
    }
    return result;
}

// C Prime number checker
int isPrime(num) {
  for(int i = 2; i < num; i++){
    if(num % i == 0) return 0;
  }
  if(num != 1 && num != 0){
    return 1;
  }else
  {
    return 0;
  }
}

// Check numbers 0 - {primes}
int checkPrimes(num) {
  int count = 0;
  for( int i = 0; i < num; i++ ) {
    if (isPrime(i)) count++;
  }
  return count;
}