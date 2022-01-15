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
    contacts: contacts.slice(0, 5),
    sortBy: null
  }

  addRand = () => {
    let randIdx = Math.floor(Math.random() * contacts.length);
    let contactsCopy = [...this.state.contacts, contacts[randIdx]];

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
    const contactsCopy =  [...this.state.contacts]

    const compareFn = this.state.sortBy === 'name' ? (a, b) => a.name.localeCompare(b.name) : this.state.sortBy === "popularity" ? (a, b) => b.popularity - a.popularity : (a, b) => b.popularity === a.popularity;

    const sortedContacts = contactsCopy.sort(compareFn)

    return (
      <div>
        <button onClick={this.addRand}>Add Random Contact</button>
        <button onClick={() => { this.state.sortBy ? this.setState({ sortBy: null }) : this.setState({ sortBy: "name" }) }}>Sort by name</button>
        <button onClick={() => { this.state.sortBy ? this.setState({ sortBy: null }) : this.setState({ sortBy: "popularity" }) }}>Sort by popularity</button>
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
            {sortedContacts.map(el => {
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
