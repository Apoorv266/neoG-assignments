// to destructure array we set any variable name(in below case its a and b) while destructuring enclosed in []
const pickFirstAndSecond = ([a, b]) => ({first: a, second: b})

console.log(pickFirstAndSecond(["orange", "banana", "apple"]))
// {first: 'orange', second: 'banana'}



// to destructure object we need to use exact key name while destructuring enclosed in {}
const pickFirstAndSecond2 = ({apple, grapes}) => ({first: apple, second: grapes})

console.log(pickFirstAndSecond2({apple : "1", grapes : "2"}))
// {first: 'orange', second: 'banana'}