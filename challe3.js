
const numb = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Define a function to filter out prime numbers from the array
function onlyPrimes(numb) {
  function isPrime(num) {
    // Check if the number is less than 2, it's not prime
    if (num < 2) {
      return false;
    }

    for (let i = 2; i * i <= num; i++) {
      // If the number is divisible by any divisor, it's not prime
      if (num % i === 0) {
        return false;
      }
    }

    // If no divisor found, the number is prime
    return true;
  }

  // Use the filter method to create a new array containing only prime numbers
  return numb.filter(isPrime);
}

const answer = onlyPrimes(numb);

console.log(answer);
