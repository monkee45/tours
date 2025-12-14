import { useEffect, useState } from "react";

const url = "https://www.course-api.com/react-tours-project";

function App() {
  const [tours, setTours] = useState([]);
 
  useEffect( () => { 
    fetchTours() 
  },[]) 
  
  async function fetchTours() { 
    let response = await fetch(url); 
    let data = await response.json(); 
    setTours(data); 
  }
  
  return (
    <div>
    {tours.map((tour) => (
        <h2 key={tour.id}>{tour.name} </h2>
      ))}
    </div>
  );  
}

export default App;
