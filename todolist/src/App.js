import { useState } from 'react';

const App = () => {
  const [input , setInput] = useState('')
  const [items , setItems] = useState([]);
  
  const handlebtn = () => {
    if(input.trim()){
      setItems([...items , {text :input , infont : false}]);
    };
    setInput('');
  };

  const handletext = (index) => {
    const newItems = items.map((item , idx) => {
      if(idx === item) {
        return{   ...item , infont: !item.infont};
      }
      return item;
    });
    setItems(newItems)
  } 
  return (
    <div>
      <input 
      value={input}
      type='text'
      onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handlebtn} >Add</button>
      <ul>
        {items.map((itme , index) => (
          <li key={index} onClick={handletext(index)} className={`cursor-pointer ${itme.infont ?  'font-bold text-xl' : ''}`}>
            <span>
              {itme}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App