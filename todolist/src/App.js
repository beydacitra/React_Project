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
    <div className='text-center bg-dark text-white w-screen h-screen'>
      <h2>StateMangement</h2>
       <input 
       className='border border-black rounded-xl shadow-md text-black m-1 p-1'
       value={input}
       type='text'
       onChange={(e) => {setInput(e.target.value)}}
       />
       <button onClick={handlebutton} className='btn font-bold text-white' >click me</button >
       <ul>
        {items.map((item , index) => (
          <li key={index} > {item} </li>
        ))}
       </ul>
    </div>
  )
}

export default App