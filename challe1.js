function changeCase(inputText) {
  // creating a function that initializes the block of code
    let changedText = '';
  //  creating a loop
    for (let i = 0; i < inputText.length; i++) {
      const currentChar = inputText.charAt(i);
      if (currentChar === currentChar.toUpperCase()) {
        changedText += currentChar.toLowerCase();
      } else {
        changedText += currentChar.toUpperCase();
      }
    }
    // completion of the loop
  
    return changedText;
  }
  
  // Testing the function
  const changer = 'The Quick Brown Fox';
  const tamper = changeCase(changer);
  console.log(tamper); // Output: any text that i want changed 



 