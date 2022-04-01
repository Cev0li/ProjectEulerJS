
// Euler Project Problem 3
// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143 ?

function highPrime(num) {

    let sieve = Array(num).fill(true)
  
  for(let i = 2; i <= Math.sqrt(num); i++){
    if(sieve[i]){
    for(let j = i * i; j <= num; j += i){
      
          sieve[j] = false
      }
    }
  }
  
    const primeFactors = sieve.map(function(prime, i){if(prime){return i}}).filter(prime => num % prime === 0)

    return primeFactors.pop()
}
  
  console.log(highPrime(600851475143))