
import './App.css';
import Heroes1 from './Answers/Heroes1';
import FontSize2 from './Answers/FontSize2';
import Fruits3 from './Answers/Fruits3';
import Todos4 from './Answers/Todos4';

function App() {
  //1st 
  const characters = {
    heroes: [
      {
        name: "IRON MAN",
        powers: "Genius,Rich,IRON Suit",
        costume: "IRON MAN suit",
      },
      {
        name: "ANT MAN",
        powers: "Ant man suit",
        costume: "Ant man suit",
      },
      {
        name: "Spider-man",
        powers: "Reflexes,Speed,Spider-Sense",
        costume: "Spider Suit",
      },
      {
        name: "Bat man",
        powers: "Rich,Bat suit",
        costume: "Bat Suit",
      },
      {
        name: "Super-man",
        powers: "Superhuman strength,Reflexes,Speed",
        costume: "Superman  Suit",
      },
    ],
    villains: [
      {
        name: "Thanos",
        powers: "Superhuman strength,Reflexes,Speed,",
        costume: "Metal armor",
      },
      {
        name: "Venom",
        powers: "shapeshifting and camouflage Symbiotes autonomous defense",
        costume: "black suit",
      },
      {
        name: "Kang the conqueror",
        powers: "time travel, can access all tech",
        costume: "kang armor",
      },
      {
        name: "Joker",
        powers: "clownlike appearance and sick humour",
        costume: "Joker costume",
      },
    ],
  };

  //4th 
  const todoItems = [
    {id: 1, task: "Writing 1-page poem", isDone: true},
    {id: 2, task: "Gym", isDone: false},
    {id: 3, task: "Shopping", isDone: false},
    {id: 4, task: "Standup call", isDone: true},
  ]
  return (
    <div className="App">
      {/* <Heroes1 characters={characters}/> */}
      {/* <FontSize2/> */}
      {/* <Fruits3/> */}
      <Todos4 todoItems={todoItems}/>
    </div>
  );
}

export default App;
