import { useState } from 'react';

const App = () => {
  const [input , setInput] = useState('')
  const [items , setItems] = useState([]);

  const handlebutton = ( ) => {
    if(input.trim()) {
      setItems([...items , {text:input , font : false}]);
    };
    setInput('')
  };
  const handlechange = (index) => {
    const newitem = items.map((item , idx) => {
      if(index === item){
        return{...item , font : !item.font }
      }
      return items;
    });
    setItems(newitem)
  }
  return (
    <div className='text-center bg-dark text-white w-screen h-screen'>
      <h2>Mangement</h2>
       <input 
       className='border border-black rounded-xl shadow-md text-black m-1 p-1'
       value={input}
       type='text'
       onChange={(e) => {setInput(e.target.value)}}
       />
       <button onClick={handlebutton} className='btn font-bold text-white' >click me</button >
       <ul>
        {items.map((item , index) => (
          <li key={index} >
            <span style={{fontWeight : item.font ? 'bolder' : 'initial'}} >
              {item.text}
            </span>
              <button onClick={handlechange(index)}>font</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App