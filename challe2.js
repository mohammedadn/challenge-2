function generatenums(start, end) {
    const result = [];
  
    // Determine the direction of iteration
    const step = start <= end ? 1 : -1;
  
    // Iterate from start to end and push each number into the array
    for (let i = start; i !== end + step; i += step) {
      result.push(i);
    }
  
    return result;
  }
  
  // Test the function  and seeing if it functions correctly
  const atmpt1 = generatenums(4, 7);
  console.log(attempt1); 
  
  const atmpt2 = generatenums(-4, 7);
  console.log(attempt2); 
  
  const atmpt3 = generatenums(41, 57);
  console.log(attempt3)