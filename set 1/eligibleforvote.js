const isEligibleToVote = val => val >= 18 ? `Eligible to vote` : "Not eligible to vote"


console.log(isEligibleToVote(20)) 
console.log(isEligibleToVote(18)) 
console.log(isEligibleToVote(17))


let a=1;
let b=2;

[a,b]=[b,a];   //use semicolan everywhere otherwise it will give the errors

console.log(a)
console.log(b)