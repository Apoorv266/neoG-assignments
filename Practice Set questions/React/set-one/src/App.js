import React from 'react'
import Buttonstyle from './Answers/2-buttonStyle';
import ListItems3 from './Answers/ListItems3';

const App = () => {

   // 1st
  // let name = "Apoorv";
  // let designation = "Engineer";
  // let workExp = 6;

  //2nd
  // const backgroundColor = "lightgreen";
  // const color = "darkgreen";
  // const borderRadius = "5px";
  // const padding = "10px";

  //3rd
  const articles = ['pen', 'pencil', 'ruler', 'eraser']
const header = "Stationery Items"

  // 6th
  // const products = [
  //   { name: "Perk", quantity: 10, sales: 7 },
  //   { name: "Pepsi", quantity: 10, sales: 20 },
  //   { name: "Coke", quantity: 18, sales: 50 },
  //   { name: "Maggi", quantity: 41, sales: 22 },
  //   { name: "5Star", quantity: 7, sales: 9 },
  // ];
  return (
    <>
    {/* <EmployeeCard name={name} designation={designation} workExp={workExp}/>
    <DisplayData products={products} /> */}
    {/* <Buttonstyle  backgroundColor={backgroundColor} color={color} borderRadius={borderRadius} padding={padding}/> */}
    <ListItems3 items={articles} header={header}/>
    </>
  )
}

export default App


