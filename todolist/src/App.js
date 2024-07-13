import React, { useState } from 'react';

const App = () => {
  const [input , setInput] = useState('');
  const [items , setItems] = useState([]);

  const handleinput = () => {
    if(input.trim()){
      setItems([...items , { text: input, completed: false }])
    };
      setInput('');
  };
  const markcomplete = (index) => {
    const newitems = ([...items]);
    newitems[index].completed = true ;
    setItems(newitems)
  }
  return (
    <div>
      <input 
      type='text'
      value={input}
      onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleinput}>click</button>
      <ul>
        {items.map((item , index) => (
          <li key={index} style={{textDecoration : item.completed ? 'line-through' : 'none'}}>
            {item.text} 
            {!item.completed && (
              <button onClick={() => markcomplete(index)}>Mark Completed</button>
            )}
            </li>
        ))}
      </ul>
    </div>
  )
}

export default App