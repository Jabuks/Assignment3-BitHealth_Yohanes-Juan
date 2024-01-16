function threeStepsAB(text) {
    return /a...b|b...a/.test(text);
  }

  // Test 
  console.log(threeStepsAB('lane borrowed')); //  true
  console.log(threeStepsAB('i am sick')); //  false
  console.log(threeStepsAB('you are boring')); //  true
  console.log(threeStepsAB('barbarian')); //  true
  console.log(threeStepsAB('bacon and meat')); //  false
  

// function threeStepsAB(text) {
//     const pattern = /a...b/g;
//     const matches = text.match(pattern);
//     return matches !== null;
//   }
  
//   // Test 
//   console.log(threeStepsAB('lane borrowed')); // true
//   console.log(threeStepsAB('i am sick')); //  false
//   console.log(threeStepsAB('you are boring')); //  true
//   console.log(threeStepsAB('barbarian')); //  false
//   console.log(threeStepsAB('bacon and meat')); //  false
  