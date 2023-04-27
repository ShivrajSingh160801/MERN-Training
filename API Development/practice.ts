// Synchronus Function
function addition(a: number, b: number): number {
    return a + b;
  }
  console.log(addition(56,89));

// Async Function Promise
const promise: Promise<void> = new Promise<void>(function (resolve, reject) {
  const string1: string = "Shivraj";
  const string2: string = "Shivraz";
  if (string1 === string2) {
    resolve();
  } else {
    resolve();
  }
});
promise
  .then(function () {
    console.log("Promise resolved successfully");
  })
  .catch(function () {
    console.log("Promise is rejected");
  });


// Synchronus Function
  function divide(a: number, b: number): number {
    try {
      if (b === 0) {
        throw new Error("Cannot divide by zero");
      }
      return a / b;
    } catch (error) {
      console.log(error);
      return NaN;
    }
  }
  
  console.log(divide(55,12));
  console.log(divide(55,1));
  

  // Async Await
  async function multiply(a: number, b: number): Promise<number> {
    return a * b;
  }
  
  async function calculate() {
    const result = await multiply(2, 3);
    console.log(result); // Output: 6
  }

  calculate();
  

  