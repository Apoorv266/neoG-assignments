let array = [4,78,8,3,6,0,12,34]

const getMaxElement= (array) => {
let count = 0
for (let i = 0; i < array.length; i++) {
   if (array[i] > count) {
    count= array[i]
   }
}
return count
}

console.log(getMaxElement(array)) // 78