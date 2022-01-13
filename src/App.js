import contacts from "./contacts.json";
import './App.css';
import React from "react";

let contactList = contacts.slice(0, 5);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>IronContacts</h1>
        <ContactList />
      </header>
    </div>
  );
}

class ContactList extends React.Component {
  state = {
    contacts: contacts.slice(0, 5)
  }

  addRand = () => {
    let randIdx = Math.floor(Math.random() * contacts.length);
    let contactsCopy = this.state.contacts.push(contacts[randIdx]);

    this.setState({
      contacts: Array.from(contactsCopy)
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.addRand}>Add Random Contact</button>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>
          <tbody>
            {this.state.contacts.map(el => {
              return (
                <tr key={el.id} >
                  <td><img src={el.pictureUrl} alt={el.name} /></td>
                  <td>{el.name}</td>
                  <td>{el.popularity.toFixed(2)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}


export default App;
