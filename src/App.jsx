import { useState } from 'react'
import './App.css'

function App() {
  const [inp, setInp] = useState("");
    const [team, setTeam] = useState([]); 
   
  
    function handleSubmit(event) {
      event.preventDefault();
      const updatedTeam = [...team, inp];
      setTeam(updatedTeam);
      setInp(""); // Clear the input field
    }
  
    function ValueChanged(e) {
      setInp(e.target.value);
    }
  
    return (
      <div>
        <form action="" onSubmit={handleSubmit}>
          <input
        
            type="text"
            placeholder="enter list name"
            value={inp}
            onChange={ValueChanged}
          />
          <button  type="submit">Find List</button>
        </form>
        <ul>
          {team.map((teamItem, index) => (
            <li key={index}>
              {teamItem}
           
              {/* <button>click</button> */}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  

  
  
  


export default App
