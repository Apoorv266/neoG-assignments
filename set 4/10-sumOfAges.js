var array = [
	{
		name: "Jay",
		age: 60
	},
	{
		name: "Gloria",
		age: 36
	},
	{
		name: "Manny",
		age: 16
	},
	{
		name: "Joe",
		age: 9
	}
]


const sumOfAges = (array) =>{
    let sum = 0
    for (const value of array) {
      sum += value["age"]
    }
    return sum
}
console.log(sumOfAges(array)); // 121