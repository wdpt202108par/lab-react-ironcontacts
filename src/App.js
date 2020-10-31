import React from 'react';
import logo from './logo.svg';
import './App.css';

import json from './contacts.json';

function App() {
  const contacts = json.slice(0,5)
  
  return (
    <div className="App">
      <h1>IronContacts</h1>

      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact, index) => {
            return (
              <tr key={index}>
                <td>
                  <img src={contact.pictureUrl} style={{width: '100px'}} />
                </td>
                <td>{contact.name}</td>
                <td>{contact.popularity}</td>
              </tr>
            )
          })}
        </tbody>
      </table>

      
    </div>
  );
}

export default App;
