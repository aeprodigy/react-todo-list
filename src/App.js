
//import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { useState } from 'react';
import './App.css';

function App() {
  const [newItem, setNewItem] = useState('');
  //const bg = "https://pixabay.com/images/id-3608029/"
  //an array to hold the newitem entries
  const [items, setItems] = useState([]);
  
  //helper function to add an item to the list.
  function addItem(){
    if(!newItem){
      alert("please enter an item");
      return 0;
    }
    const item = {
      id: Math.floor(Math.random()*1000),
      value:newItem,

    };
    setItems(oldList => [...oldList, item] );
    //we set the new item back to the state it was in on line 7.
    setNewItem("");
    console.log(item);
  }

  //delete function below
  function deleteItem(id){
    //new array to set the state of items to new excluding the deleted part.
   const newArray = items.filter(item => item.id !== id);

   //we set it setItems state to new array.
   setItems(newArray);
  }

  return (
    <div className="App">
      <h1>Todo list</h1>
      <input
        type='text'
        placeholder='Add new todo...'
        value={newItem}
        onChange={e => setNewItem(e.target.value)}
      />
      <button
      onClick={()=>addItem()}
      >Add</button>
      <ul>
        {
          items.map(
            item=>{
              return (
                <li key={item.id}>
                  {item.value}
                  <button onClick={() => deleteItem(item.id)}>X</button>
                </li>
              );
            }
          )
        }
      </ul>
    </div>
  );
}

export default App;
