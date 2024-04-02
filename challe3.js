function primeNums(array){
  //.filter method which creates a new array and returns the elements that meet a certain condition
  return array.filter(checkPrime )
}
//function that checks if a given num is prime number or not
function checkPrime(num){
  if(num <2) 
  return false;  //if the number is less than 2 its not a prime number
  for (let i = 2; i <=Math.sqrt(num); i++){
    
      if (num % i ===0) return false  

      // (num % i ===0) show if the number gives a remainder when divided
      
  }
  return num > 1;

}
const input = [1,2,3,4,5,6,7,8,9,10] 
 //create variable that takes input of numbers as an array
const finallyPrime = primeNums(input)
 //invokes the primeNumbers function with an argument (input)
console.log(finallyPrime) 