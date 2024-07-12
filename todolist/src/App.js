import React, { useState } from 'react';

const App = () => {
  const [input , setInput] = useState('');
  const [items , setItems] = useState([]);

  const handlebutton = ( ) => {
    if(input.trim()) {
      setItems([...items , input]);
    };
    setInput('')
  }
  return (
    <div>
      <h2>StateMangement</h2>
       <input 
       value={input}
       type='text'
       onChange={(e) => {setInput(e.target.value)}}
       />
       <button onClick={handlebutton} >click me</button>
       <ul>
        {items.map((item , index) => (
          <li key={index} > {item} </li>
        ))}
       </ul>
    </div>
  )
}

export default App