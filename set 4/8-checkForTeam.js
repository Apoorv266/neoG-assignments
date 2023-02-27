// Your ES6 code here

// one liner solution - using inbuilt function
const checkForTeam = (obj) => obj.hasOwnProperty("team") ? obj : {...obj, "team" : "A"}

// without inbuilt Function
const checkForTeam1 = (obj) =>{
    for (const item in obj) {
        // if (item.team == undefined) {
            // return {...obj, "team" : "A"}
            console.log(item);
        // }
    }
    // return "ok"
}



// console.log(checkForTeam({ firstName: 'Penn', lastName: 'Ma' }))
// // {firstName: 'Penn', lastName: 'Ma', team: A}
// console.log(checkForTeam({ firstName: 'John', lastName: 'Dee', team: "B" }))
// // {firstName: 'John', lastName: 'Dee', team: B}
// console.log(checkForTeam({ firstName: 'Priya', lastName: 'Raj' }))
// // {firstName: 'Priya', lastName: 'Raj', team: A}

console.log(checkForTeam1({ firstName: 'Penn', lastName: 'Ma' }))
// {firstName: 'Penn', lastName: 'Ma', team: A}
console.log(checkForTeam1({ firstName: 'John', lastName: 'Dee', team: "B" }))
// {firstName: 'John', lastName: 'Dee', team: B}
