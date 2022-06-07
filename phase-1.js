function stretch() {
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

function runOnTreadmill() {
  // Your code here
}

function liftWeights() {
  // Your code here
}

function workout() {
  // Your code here
  stretch()
}


/* ============================ TEST YOUR CODE ============================

Run the file (`node phase-1.js`) and check your output against the expected
output.
*/


workout();
  // should print out the following:
    // done stretching
    // done running on treadmill
    // done lifting weights
    // done working out
