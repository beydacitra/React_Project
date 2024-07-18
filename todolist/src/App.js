import React, {
  useEffect,
  useState,
} from 'react';

const App = () => {
  const [fulldate, setFullDate] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      const newdate = new Date();
      const year = newdate.getFullYear();
      const month = newdate.getMonth() + 1; 
      const day = newdate.getDate();
      const second = newdate.getSeconds();

      const currentDate = `${year}-${month}-${day} ${second}`;
      setFullDate(currentDate);
    }, 1000); 

    return () => clearInterval(interval); 
  }, []);  

  const handleClick = () => {
    // Clear the current date briefly
    setFullDate('');
    
    // This will trigger the useEffect to update the date
    // with the current time on the next interval tick
  };

  return (
    <div className='flex justify-center'>
      <button onClick={handleClick}>
        Update Date
      </button>
      <h2>{fulldate}</h2>
    </div>
  );
}

export default App;
