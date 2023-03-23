// Write a function ‘delayAlert’ that takes in a message ‘Hello, world!’ and a delay time in milliseconds, and displays the message in an alert box after the specified delay time using setTimeout. 

// Your Code here
const delayedAlert = (msg, time) =>{
setTimeout(() => {
    console.error(msg)
}, time);
}


delayedAlert('Hello, world!', 2000);
// Should display an alert box with the message, Hello, world!