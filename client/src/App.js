import React, { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [data, setData] = useState({})

  const handleNameChange = (event) => {
    setName(event.target.value);
  }

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  }

  async function Create() {
    const response = await fetch('http://localhost:4000/api/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, age }),
    });
    const data = await response.json();
    console.log(data);
  }
  
  async function Read() {
    const response = await fetch('http://localhost:4000/api/read', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    setData(data);
    console.log(data);
  }

  async function Update() {
    const response = await fetch('http://localhost:4000/api/update', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, age }),
    });
    const data = await response.json();
    console.log(data);
  }

  async function Delete() {
    const response = await fetch('http://localhost:4000/api/delete', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    console.log(data);
  }

  return (
    <div className="App">
      
        <h1>Rest Api client</h1>
        <div className='row'>
          <div className='col-md-6 d:flex'>
            <h2>Create Operation</h2>
            <input type='text' placeholder='Name' onChange={handleNameChange} />
            <input type='text' placeholder='Age' onChange={handleAgeChange} />
            <br />
            <button onClick={Create}>Create</button>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-6'>
            <h2>Read Operation</h2>
            <button onClick={Read}>Read</button>
            <p>
              {data.name} {data.age}
            </p>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-6'>
            <h2>Update Operation</h2>
            <input type='text' placeholder='Name' onChange={handleNameChange} />
            <input type='text' placeholder='Age' onChange={handleAgeChange} />
            <br />
            <button onClick={Update}>Update</button>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-6'>
            <h2>Delete Operation</h2>
            <button onClick={Delete}>Delete</button>
            <p></p>
          </div>
        </div>
    </div>
  );
}

export default App;