import React from 'react';
import './App.css';
import contacts from "./contacts.json";

const Contact = (props) => {
  return (
    <>
      <td><img className="contactPicture" src={props.pictureUrl} alt={props.name}/></td>
      <td>{props.name}</td>
      <td>{Math.round((props.popularity)*100)/100}</td>
      <td>
      <button onClick={props.clickMe}>Delete</button>
      </td>
      
    </>
  );
};

class ContactsTab extends React.Component {

  // ITERATION 1 :  Display the first 5 contacts
  state = {
    contacts: contacts.slice(0, 5)
  }

  // ITERATION 2 : Add New Random contacts
  //Create a function to add a new random contact
  addContactHandler = () => {
    //random index
    let randomIndex = Math.floor(Math.random() * contacts.length);

    //Copy of the array "this.state.contacts" to not mutating the state
    const contactsCopy = [...this.state.contacts, (contacts[randomIndex])];

    //Update the state 
    this.setState({
      contacts: contactsCopy
    })
  }


  sortByName = () => {
    const sortedByName = this.state.contacts.sort(function  (a, b) {
      return a.name.localeCompare(b.name)
    })
    this.setState({
      contacts: sortedByName
    })
  }

  sortByPopularity = () => {
    const sortedByPopularity = this.state.contacts.sort(function  (a, b) {
      return b.popularity - a.popularity
    })
    this.setState({
      contacts: sortedByPopularity
    })
  }

  deleteContacts = (id) => {
    const contactCopy = this.state.contacts.slice();
    const index = contactCopy.findIndex((el) => el.id === id);
    contactCopy.splice(index, 1); //

    this.setState({
      contacts: contactCopy
    });
  };



  render () {
    return (
      <>
        {/* Iteration 2 : Button to add random contact */}
        <button onClick={this.addContactHandler}>Add Random Contact</button>
        <button onClick={this.sortByName}>Sort By Name</button>
        <button onClick={this.sortByPopularity}>Sort By Popularity</button>
        
        
        {/* Iteration 1 : The Contact table */}
        <table>
          <thead>
            <tr>
              <th colSpan="1">Picture</th>
              <th colSpan="1">Name</th>
              <th colSpan="1">Popularity</th>
              <th colSpan="1">Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.contacts.map(contact => (
              <tr key={contact.id}>
                <Contact name={contact.name} 
                  pictureUrl={contact.pictureUrl} 
                  popularity={contact.popularity} 
                  clickMe = {()=>this.deleteContacts(contact.id)}
                />
              </tr>                      
            ))}
            </tbody>
        </table>
      </>
    ) 
  }
}





        
function App() {
  return (
    <div className="App">
      <h1>IronContacts</h1>
      <ContactsTab />
    </div>
  );
}

export default App;