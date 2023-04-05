
import Cartoon2 from './Answers/Cartoon2';
import Cartoon3 from './Answers/Cartoon3';
import Cartoon4 from './Answers/Cartoon4';
import CategoryCars9 from './Answers/CategoryCars9';
import DispImg1 from './Answers/DispImg1';
import Donation8 from './Answers/Donation8';
import Flowers6 from './Answers/Flowers6';
import Flowers7 from './Answers/Flowers7';
import Vegetables5 from './Answers/Vegetables5';
import './App.css';

function App() {
  //1st
  // let url="https://picsum.photos/200"
  // let height = "500px"
  // let width="500px"

  //2nd 3rd 4th
  // const cartoons = [
  //   {
  //       id: 1,
  //       name: 'Mickey Mouse',
  //       superpower: 'Invisibility',
  //       magnitude: 1
  //     },
  //     {
  //       id: 2,
  //       name: 'Spongebob Squarepants',
  //       superpower: 'Super Strength',
  //       magnitude: 3
  //     },
  //     {
  //       id: 3,
  //       name: 'Bugs Bunny',
  //       superpower: 'Teleportation',
  //       magnitude: 9
  //     },
  //     {
  //       id: 4,
  //       name: 'Tom and Jerry',
  //       superpower: 'Intelligence',
  //       magnitude: 8
  //     },
  //     {
  //       id: 5,
  //       name: 'The Powerpuff Girls',
  //       superpower: 'Flight',
  //       magnitude: 10
  //     }
  //   ]


  //5th
  // const vegetables = [
  //   {
  //     id: 1,
  //     name: 'Carrots',
  //     pickDate: '2023-03-25',
  //   },
  //   {
  //     id: 2,
  //     name: 'Broccoli',
  //     pickDate: '2023-03-30',
  //   },
  //   {
  //     id: 3,
  //     name: 'Peppers',
  //     pickDate: '2023-03-25',
  //   },
  //   {
  //     id: 4,
  //     name: 'Tomatoes',
  //     pickDate: '2023-03-27',
  //   },
  //   {
  //     id: 5,
  //     name: 'Ladies Finger',
  //     pickDate: '2023-03-30',
  //   },
  // ]

  //6th && 7th
  // const bouquet = [
  //   {
  //     id: 1,
  //     flowers: ['rose', 'lily', 'marigold'],
  //     totalFlowers: 9,
  //     price: 1400,
  //   },
  //   {
  //     id: 2,
  //     flowers: ['snapdragon', 'sunflower'],
  //     totalFlowers: 10,
  //     price: 3400,
  //   },
  // ]

  //8th
  // const DonationData = [
  //   {
  //     id: 1,
  //     name: 'Nitin',
  //     Donation: 7800,
  //   },
  //   {
  //     id: 2,
  //     name: 'Mehak',
  //     Donation: 9500,
  //   },
  //   {
  //     id: 3,
  //     name: 'Mehul',
  //     Donation: 65000,
  //   },
  //   {
  //     id: 4,
  //     name: 'Nina',
  //     Donation: 560,
  //   },
  // ]

  //9th
  const cars = [
    {
      id: 1,
      name: 'supra',
      price: 500000,
      category: 'sports',
    },
    {
      id: 2,
      name: 'A5',
      price: 700000,
      category: 'luxury',
    },
    {
      id: 3,
      name: 'huyara',
      price: 1500000,
      category: 'sports',
    },
    {
      id: 4,
      name: 'agera R',
      price: 3500000,
      category: 'sports',
    },
  ]

  return (
    <div className="App">
   {/* <DispImg1 url={url} height={height} width={width}/> */}
   {/* <Cartoon2 cartoons={cartoons}/> */}
   {/* <Cartoon3 cartoons={cartoons}/> */}
   {/* <Cartoon4 cartoons={cartoons}/> */}
   {/* <Vegetables5 vegetables={vegetables}/> */}
   {/* <Flowers6 bouquet={bouquet}/> */}
   {/* <Flowers7 bouquet={bouquet}/>  */}
   {/* <Donation8 DonationData={DonationData}/> */}
   <CategoryCars9 cars={cars}/>
    </div>
  );
}

export default App;
