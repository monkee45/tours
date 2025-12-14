import { useEffect, useState } from "react";
import Loading from "./Loading"

const url = "https://www.course-api.com/react-tours-project";

function App() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
 
  useEffect( () => { 
    fetchTours() 
  },[]) 
  
  async function fetchTours() { 
    setLoading(true)
    let response = await fetch(url); 
    let data = await response.json(); 
    setTours(data); 
    setLoading(false)
  }
  
  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    )
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
