import React, { useState, useEffect } from 'react';
function TaskThree  () {
    const [time, setTime] = useState(new Date());
  
    useEffect(() => {
      
      const intervalId = setInterval(() => {
        setTime(new Date());
      }, 1000);
  
     
      return () => clearInterval(intervalId);
    }, []); 
    const timeOptions = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };
    const formattedTime = time.toLocaleTimeString(undefined, timeOptions);
  
    return (
      <div>
        <h1>Digital Clock</h1>
        <p>{formattedTime}</p>
      </div>
    );
  };
  
  export default TaskThree;