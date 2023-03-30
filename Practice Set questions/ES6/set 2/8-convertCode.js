const getData = ({name,address: {city}} ) => {
    console.log(name); // John Doe
    console.log(city); // New York
}

const person = {
  name: 'John Doe',
  address: {
    city: 'New York',
    state: 'NY',
  },
};
getData(person);