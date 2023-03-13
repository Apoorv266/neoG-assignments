const names = ["Ram", "Shyam", "Mohan", "Mohan", "Ram", "Don"]; 


// group items based of frequency
// Output:
// {'Ram': 2, 'Shyam': 1, 'Mohan': 2, 'Don': 1}


// first approach
const groupFunc = (acc, arr) => acc[arr] ? {...acc, [arr] : acc[arr] + 1} : {...acc, [arr] : 1}

// second approach
const freqencyOfNames = names.reduce((acc, curr)=>{
    acc[curr] ? acc[curr]++ : acc[curr]=1;
    return acc;
  },{})

  // third approach
  const getFrequnecyOfNames = names => names.reduce((acc, name) => {
    acc[name] = (acc[name] || 0) + 1;
    return acc;
}, {})

let result = names.reduce(groupFunc, {})
console.log(result)
console.log(freqencyOfNames)
console.log(getFrequnecyOfNames(names))


