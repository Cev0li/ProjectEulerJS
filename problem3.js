
// // Euler Project Problem 3
// // The prime factors of 13195 are 5, 7, 13 and 29.
// // What is the largest prime factor of the number 600851475143 ?

let largestPrime = function(num){

    let largestFactor = 2

    while(num != largestFactor){ 
        
        if(num % largestFactor ===  0){
            num /= largestFactor
            largestFactor = 2
        }else{
            largestFactor++
        }
    }
    return largestFactor
}

console.log(largestPrime(600851475143))