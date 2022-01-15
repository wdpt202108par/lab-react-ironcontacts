import './App.css';
import React from 'react';
import contacts from "./contacts.json";

const five= [...contacts.slice(0, 5)];

class Random extends React.Component {
  state = {
    contacts: five,
  }

  addNewRandom = (event) => {
    let contactsCopy = [...this.state.contacts]
    const random = contacts[Math.floor(Math.random() * contacts.length)];
    if (contactsCopy.findIndex(el => el.id === random.id) !== -1) {
      console.log(random)
      return this.addNewRandom()
    }
    this.setState ({
      contacts : [...this.state.contacts, {...random}]
    })
  }

  sortAlph = () => {
    let contactsCopy = [...this.state.contacts];
    contactsCopy.sort((firstEl, secondEl) => {
        return firstEl.name.localeCompare(secondEl.name)
    })
    this.setState({
      contacts: contactsCopy
    })
  }

  sortPopularity = () => {
    let contactsCopy = [...this.state.contacts];
    contactsCopy.sort((firstEl, secondEl) => {
      if ((firstEl.popularity - secondEl.popularity) < 0) return 1;
      if ((firstEl.popularity - secondEl.popularity) > 0)return -1;
      if ((firstEl.popularity - secondEl.popularity) === 0) return 0;
      return null;
    })
    this.setState({
      contacts: contactsCopy
    })
  }

  deleteContact = (contactId) => {
    let contactsCopy = [...this.state.contacts]
    let index = contactsCopy.findIndex(item => item.id === contactId)
    contactsCopy.splice(index, 1)
    this.setState(
      {
        contacts: contactsCopy
      }
    )
  }

  render() {
    return (
      <div className="App">
      <h1>IronContacts</h1>
      <button onClick={this.addNewRandom}>Add Random Contact</button>
      <button onClick={this.sortAlph}>sort by alphabetical order</button>
      <button onClick={this.sortPopularity}>sort Popularity</button>
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
                  <td><button onClick={ (e) => this.deleteContact(contact.id)}>Delete</button></td>
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
