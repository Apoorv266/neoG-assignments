// Write an ES6 function checkForTeam which takes a obj with properties firstname , lastname and a optional property team . It will check if a student already has a team. If team is not given then add them to team “A” and return the object else do nothing and return the same object. Avoid using in-built methods.

// output format
const checkForTeam=(obj)=>{
   return obj.team ? obj : {...obj, team : "A"}
}

console.log(checkForTeam({ firstName: 'Penn', lastName: 'Ma' }))
// {firstName: 'Penn', lastName: 'Ma', team: A}

console.log(checkForTeam({ firstName: 'John', lastName: 'Dee', team: 'B' }))
// {firstName: 'John', lastName: 'Dee', team: B}

console.log(checkForTeam({ firstName: 'Priya', lastName: 'Raj' }))
// {firstName: 'Priya', lastName: 'Raj', team: A}