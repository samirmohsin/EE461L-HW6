import './App.css';
import {useState} from "react";

/**
 * Basic frontend for the HW as specified in the HW 6 doc
 */

function App() {
  const [name, setName] = useState("");
  const [output, setOutput] = useState("");

  /**
   * Send user input to backend to recieve appropriate message
   * Then set output hook to recieved message from backend
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(JSON.stringify(name));

    fetch("/name/" + name)
      .then(response => response.json())
      .then(data => {
        setOutput(data.lname)
      })
      .catch(error=> {
        console.log(error)
      })
    console.log(JSON.stringify(output));
  }


  /**
   * Basic react form which sends user input to server upon form submission 
   * Updates server response message w/ each new form submission
   */
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Your Input Request to Server
          <input 
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
          name="name"/>
        </label>
        <button type="submit" name="Submit" value="Submit">
          Submit
        </button>
      </form>

      <p>
        Response from Server: {output}
      </p>
    </div>
    
  );
}

export default App;
