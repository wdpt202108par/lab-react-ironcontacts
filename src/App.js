import contacts from "./contacts.json";
import './App.css';
import React from "react";

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
    let contactsCopy = [...this.state.contacts, contacts[randIdx]];

    this.setState({
      contacts: contactsCopy
    })
  }

  sortByName = () => {
    let contactsCopy = [...this.state.contacts];
    contactsCopy.sort((a, b) => a.name.localeCompare(b.name))

    this.setState({
      contacts: contactsCopy
    })
  }

  sortByPop = () => {
    let contactsCopy = [...this.state.contacts];
    contactsCopy.sort((a, b) => b.popularity - a.popularity)

    this.setState({
      contacts: contactsCopy
    })
  }

  delete = (contactId) => {
    let contactsCopy = [...this.state.contacts];
    let contactIndex = contactsCopy.findIndex(el => el.id === contactId);
    contactsCopy.splice(contactIndex, 1);

    this.setState({
      contacts: contactsCopy
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.addRand}>Add Random Contact</button>
        <button onClick={this.sortByName}>Sort by name</button>
        <button onClick={this.sortByPop}>Sort by popularity</button>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.contacts.map(el => {
              return (
                <tr key={el.id} >
                  <td><img src={el.pictureUrl} alt={el.name} /></td>
                  <td>{el.name}</td>
                  <td>{el.popularity.toFixed(2)}</td>
                  <td><button onClick={() => this.delete(el.id)}>Delete</button></td>
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
