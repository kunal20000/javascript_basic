function numberOfPrimes(N) {
      const isPrime = new Array(N + 1).fill(true);

      isPrime[0] = false;
      isPrime[1] = false;
      for (let i = 2; i <= N; i++) {
            if (isPrime[i]) {
                  for (let j = i * i; j <= N; j += i) {
                        isPrime[j] = false;
                  }
            }
      }
      let count = 0;
      for (let i = 2; i <= N; i++) {
            if (isPrime[i]) {
                  count++;
            }
      }
      return count;

}