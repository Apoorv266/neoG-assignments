// Write a function that uses reduce to find the user who has the most number of friends.

const users = [
  { id: 1, name: 'Alice', friends: ["Bob", "Charlie", "David"] },
  { id: 2, name: 'Bob', friends: ["Alice", "Charlie", "Eve"] },
  { id: 3, name: 'Charlie', friends: ["Alice", "Bob", "David", "Eve"] },
  { id: 4, name: 'David', friends: ["Alice", "Charlie"] },
  { id: 5, name: 'Eve', friends: ["Bob", "Charlie"] },
]

const maxFriendFunc = (acc, arr) =>arr.friends.length > acc.friends.length ? arr : acc

const result = users.reduce(maxFriendFunc)
console.log(result)

