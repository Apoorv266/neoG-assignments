import React from "react";
// import Buttonstyle from './Answers/2-buttonStyle';
import DispImg from "./Answers/DispImg4";
import ItemList5 from "./Answers/ItemList5";
// import ListItems3 from './Answers/ListItems3';

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
  //   const articles = ['pen', 'pencil', 'ruler', 'eraser']
  // const header = "Stationery Items"

  //4th
  // const imageLink =
  //   "https://cdn.pixabay.com/photo/2023/03/18/10/43/plum-blossoms-7860381_1280.jpg";
  // const caption = "Spring Flowers";

  //5th and 6th
  const products = [
    { name: "Perk", quantity: 10, sales: 7 },
    { name: "Pepsi", quantity: 10, sales: 20 },
    { name: "Coke", quantity: 18, sales: 50 },
    { name: "Maggi", quantity: 41, sales: 22 },
    { name: "5Star", quantity: 7, sales: 9 },
  ];
  return (
    <>
      {/* <EmployeeCard name={name} designation={designation} workExp={workExp}/>
    <DisplayData products={products} /> */}
      {/* <Buttonstyle  backgroundColor={backgroundColor} color={color} borderRadius={borderRadius} padding={padding}/> */}
      {/* <ListItems3 items={articles} header={header}/> */}
      {/* <DispImg imageLink={imageLink} caption={caption} /> */}
      <ItemList5 products={products}/>
    </>
  );
};

export default App;