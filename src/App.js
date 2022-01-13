import './App.css';
import React from 'react';
import contacts from "./contacts.json";

const five= [...contacts.slice(0, 5)];

class Random extends React.Component {
  state = {
    contacts: five,
  }

  addNewRandom = (event) => {
    const random = contacts[Math.floor(Math.random() * contacts.length)];
    console.log('random: ', random)
    this.setState ({
      contacts : [...this.state.contacts, {...random}]
    })
  }

  render() {
    return (
      <div className="App">
      <h1>IronContacts</h1>
      <button onClick={this.addNewRandom}>Add Random Contact</button>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>
          <tbody>
            {this.state.contacts.map(contact => {
              return (
                <tr key={contact.id}>
                  <td><img src={contact.pictureUrl} alt="contactpic"></img></td>
                  <td>{contact.name}</td>
                  <td>{contact.popularity.toFixed(2)}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

function App() {
  return (
    <>
      <Random />
    </>
  )
}

export default App;
