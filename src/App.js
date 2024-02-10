import logo from './logo.svg';
import './App.css';

import { useState } from 'react';

function App() {
  const [cards, setCards] = useState([]);

  const callBackend = async () => {
    try {
      const response = await fetch('http://localhost:8000/hello_world', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const addTaskCard = (card) => {
    setCards((prevCards) => [...prevCards, card]);
  };

  return (
    <div className="App">
      <header>
        <div className="title">Docker List</div>
        <button onClick={callBackend}>Call Backend</button>
      </header>
      <br></br>
      <section>
        <input placeholder="Enter task here" />
        <button onClick={addTaskCard}>Add</button>
      </section>
      <section className="container">
        <div className="card">Card 1</div>
        <div className="card">Card 2</div>
        <div className="card">Card 3</div>
      </section>
    </div>
  );
}

export default App;
