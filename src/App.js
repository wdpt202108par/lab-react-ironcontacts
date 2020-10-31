import React from 'react';
import logo from './logo.svg';
import './App.css';

import json from './contacts.json';

class App extends React.Component {
  state = {
    contacts: json.slice(0, 5)
  }

  addHandler = () => {
    const randContact = json[Math.floor(Math.random()*json.length)];

    this.setState({
      contacts: [...this.state.contacts, randContact]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
  
        <p>
            <button onClick={e => this.addHandler()}>Add new contact</button>
          </p>
  
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>
          <tbody>
            {this.state.contacts.map((contact, index) => {
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

  
}

export default App;
