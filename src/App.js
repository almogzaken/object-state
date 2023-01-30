import './App.css';
import { useState } from 'react';


function App() {
  const [toDo, setToDo] = useState('')
  const [toDoList, setToDoList] = useState (['buy milk','go to movie','walk the dog','drink coffee'])
  function handleToDoChange (e){
    setToDo (e.target.value)
  }

  console.log("====Arrays====")
  let listA = ['messi','mbappe','ronaldo']
  let listB = listA
  listA.push('kane')
  listB.push('modric')
  console.log(listA)
  console.log(listB)

  console.log('====spread oparator====')
  let listC = [...listA]
  listC.push('griezmann')
  console.log(listA)
  console.log(listC)

  let listD = listA.filter(player => player !== 'ronaldo')
  console.log(listA)
  console.log(listD)

  return (
    <div className="App">
      <input value={toDo} onChange = {handleToDoChange}/> 
      <button> add to list</button>
      <h3>List of things to do</h3>
      <ul>
        {toDoList.map(
            toDo => (
              <li>{toDo}</li>
            ))
        }
      </ul>
    </div>
  );
}

export default App;
