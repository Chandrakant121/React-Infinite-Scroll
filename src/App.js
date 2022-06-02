import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';


function App() {

  const [data, setData] = useState([]);
  const [load, setLoad] = useState(true);

  const handleScroll = (event) => {
    const { scrollTop, clientHeight, scrollHeight } = event.currentTarget;

    let scroll_var = Math.round(scrollHeight - scrollTop);
    if (scroll_var === clientHeight) {
      setLoad(true)
    }
  }
  
  useEffect(() => {
    axios.get("http://localhost:8080/users")
      .then(res => setData(prev => [...prev, ...res.data]))

    setLoad(false)
  }, [load])



  return (
    <div className="App" onScroll={handleScroll}>
      <ul >
        {
          data.map((el, id) => {
            return (
              <li key={id} >{el.name}</li>
            )
          })
        }
      </ul>
    </div>
  );
}

export default App;
