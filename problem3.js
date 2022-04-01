function sumPrimes(num) {

    let sieve = Array(num).fill(true)
    sieve[0] = false
    sieve[1] = false
  
  for(let i = 2; i <= Math.sqrt(num); i++){
    if(sieve[i]){
    for(let j = i * i; j <= num; j += i){
      
          sieve[j] = false
      }
    }
  }
  
  const primeFact = sieve.map(function(prime, i){if(prime){return i}}).filter(prime => num % prime === 0)


  return primeFact.pop()
   
  
    }
  
  console.log(sumPrimes(13195))