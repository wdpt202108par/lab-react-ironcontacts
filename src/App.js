import logo from './logo.svg';
import './App.css';
import json from './contacts.json'

import contacts from "./contacts.json";
import { createForbiddenExclusivityError } from 'mocha/lib/errors';
import React from 'react';


class App extends React.Component {
  constructor(props) {
    super(props); 

    this.state = {
      celebrities : json.slice(0,5)
    }
  }

   //ITERATION 2
  randomNumber = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  } ;

  addCelebHandler = (event) => {
    // const celebCopy = this.state.celebrities.slice();
    const celebCopy = [ ...this.state.celebrities ];

    const randId = this.randomNumber(6, json.length); 
    const newCeleb = json[randId]; // {}
    celebCopy.push(newCeleb)

    this.setState({
      celebrities: celebCopy
    });
  }

  //ITERATION 3
  sortNameHandler = (event) => {
    const celebCopy = [ ...this.state.celebrities ];

    function compare( a, b ) {
      if ( a.name < b.name ){
        return -1;
      }
      if ( a.name > b.name ){
        return 1;
      }
      return 0;
    }
    
    celebCopy.sort( compare );

    this.setState({
      celebrities: celebCopy
    });
  }

  sortPopHandler = (event) => {
    const celebCopy = [ ...this.state.celebrities ];
    function compare( a, b ) {
      if ( a.popularity > b.popularity ){
        return -1;
      }
      if ( a.popularity < b.popularity ){
        return 1;
      }
      return 0;
    }
    
    celebCopy.sort( compare );
    this.setState({
      celebrities: celebCopy
    });
  }

  //ITERATION 4
  removeCelebHandler = (id) => {
    const celebCopy = [ ...this.state.celebrities ];
    const celebIndex = celebCopy.findIndex((celebrity) => celebrity.id === id) ;
    celebCopy.splice(celebIndex, 1)

    this.setState({
      celebrities: celebCopy
    });
  }

  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <button onClick={this.addCelebHandler}>Add Random Contact</button>
        <button onClick={this.sortNameHandler}>Sort by Name</button>
        <button onClick={this.sortPopHandler}>Sort by Popularity</button>
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
                {/* [ <tr key="">...</tr>, <tr key="">...</tr>, ....] */}
                {this.state.celebrities.map((celebrity) => {
                  return (
                    <tr key={celebrity.id} value={celebrity.id}>
                      <td><img src={celebrity.pictureUrl} /></td>
                      <td>{celebrity.name}</td>
                      <td>{Number.parseFloat(celebrity.popularity).toFixed(2)}</td>
                      <td><button onClick={() => this.removeCelebHandler(celebrity.id)}>Delete</button></td>
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
