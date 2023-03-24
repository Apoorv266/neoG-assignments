
// Write a function ‘delayedGreeting’ that consoles a greeting message after a delay of 2 seconds using setTimeout. You can practice this question in any JS editor or your browser console.
const delayedGreeting = () =>{
    let count = 0

    let func = setInterval(() => {
        count++
        console.log(count)
    }, 1000);
    setTimeout(() => {
        clearInterval(func)
        console.log("Greetings !")
    }, 5000);
}


delayedGreeting();
// Hello, welcome to my portfolio!