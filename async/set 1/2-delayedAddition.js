// Write a function ‘delayedAddition’ that takes in two numbers and consoles their sum after a delay of 4 seconds using setTimeout. 


// Your code here
const delayedAddition = (num1,num2) =>{
    setTimeout(() => {
        const sum = num1 + num2;
        console.log(sum)
    }, 4000);
}

console.log(delayedAddition(2, 3)); 
// 5