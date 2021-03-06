function stretch(timeLeft) {
  // refactor your code from phase 1
  // Your code here
  const newP =  new Promise((resolved, rejected) =>{
    setTimeout(()=>{
       resolved('done stretching')
  }, 1000)

})
newP.then((resolved)=>{
    console.log(resolved)
})
}


function runOnTreadmill(timeLeft) {
  // refactor your code from phase 1
  // Your code here
  const newP =  new Promise((resolved, rejected) =>{
    setTimeout(()=>{
       resolved('done running on treadmill')
  }, 500)

  })
  newP.then((resolved)=>{
      console.log(resolved)
  })
}


function liftWeights(timeLeft) {
  // refactor your code from phase 1
  // Your code here
  const newP =  new Promise((resolved) =>{
    setTimeout(()=>{
       resolved('done lifting weights')
  }, 2000)

  })
  newP.then((resolved)=>{
      console.log(resolved)
  })
}


function workout(totalTime) {
  // refactor your code from phase 1
  // Your code here
  stretch();
  runOnTreadmill();
  liftWeights();
}

/* ============================ TEST YOUR CODE ============================

Comment in each invocation of your workout function below and run the file
(node phase-2.js) to see if you get the expected output.
*/


workout(500);
  // should print out the following:
    // Error:  you dont have enough time to stretch


workout(1000);
  // should print out the following:
    // done stretching
    // Error:  you dont have enough time to run on treadmill


workout(2000);
  // should print out the following:
    // done stretching
    // done running on treadmill
    // Error:  you dont have enough time to lift weights


workout(4000);
  // should print out the following:
  //   done stretching
  //   done running on treadmill
  //   done lifting weights
  //   done working out with 0.5 seconds left
