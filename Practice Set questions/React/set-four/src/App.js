
import './App.css';
import Heroes1 from './Answers/Heroes1';
import FontSize2 from './Answers/FontSize2';
import Fruits3 from './Answers/Fruits3';
import Todos4 from './Answers/Todos4';
import TodoList5 from './Answers/TodoList5';
import Books6 from './Answers/Books6';
import Game7 from './Answers/Game7';

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

  //5th
  const todoItems1 = [
    {id: 1, task: "Writing 1-page poem", isDone: false},
    {id: 2, task: "Gym", isDone: false},
    {id: 3, task: "Shopping", isDone: false},
    {id: 4, task: "Standup call", isDone: false},
  ]

  //6th 
  const books = [
    { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", genre: "Classic" },
    { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Classic" },
    { id: 3, title: "The Catcher in the Rye", author: "J.D. Salinger", genre: "Classic" },
    { id: 4, title: "1984", author: "George Orwell", genre: "Dystopian" },
    { id: 5, title: "Brave New World", author: "Aldous Huxley", genre: "Dystopian" },
    { id: 6, title: "The Hunger Games", author: "Suzanne Collins", genre: "Young Adult" },
    { id: 7, title: "Harry Potter and the Philosopher's Stone", author: "J.K. Rowling", genre: "Young Adult" },
  ];
  return (
    <div className="App">
      {/* <Heroes1 characters={characters}/> */}
      {/* <FontSize2/> */}
      {/* <Fruits3/> */}
      {/* <Todos4 todoItems={todoItems}/> */}
      {/* <TodoList5 todoItems1={todoItems1}/> */}
      {/* <Books6 books={books}/> */}
      <Game7/>
    </div>
  );
}

export default App;
