const employeeData = [
	{name: "ram", dept: "marketer"}, 
	{name: "Radha", dept: "SDE"},
	{name: "shyam", dept: "finance professional"},
]

// Your code here
const greetEmployeeMessages = array => array.map(item => `Hi ${item.name}ram we are glad to have you as a ${item.dept}`)


console.log(greetEmployeeMessages(employeeData));
// Output: ['Hi ram we are glad to have you as a marketing', 'Hi Radha we are glad to have you as a SDE', 'Hi shyam we are glad to have you as a finance professional']