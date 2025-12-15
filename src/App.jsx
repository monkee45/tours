import { useEffect, useState } from "react";
import Loading from "./Loading"
import Tours from "./Tours"

const url = "https://www.course-api.com/react-tours-project";

function App() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
 
  function removeTour(tourID) {
    setTours((prevTours) => prevTours.filter((tour) => tour.id !== tourID))
  }

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
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );  
}

export default App;
