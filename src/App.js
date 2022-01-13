import logo from './logo.svg';
import { Component } from 'react';
import './App.css';
import contacts from "./contacts.json";

const numbers = [1, 2, 3, 4, 5];
 
// array of list item HTML elements that needs to be displayed
export const listItems = [<li>1</li>, <li>2</li>, <li>3</li>, <li>4</li>, <li>5</li>];

//export const listItems = numbers.map((el, i) => <li key={i}>{el}</li>); // [<li>1</li>, ....]

// recupérer les 5 premiers contacts

const actors = contacts.splice(0, 5)

class Actor extends Component{
  state = {
    actors: actors
  }

  render() {
    return (
      <>
        <table>
          <tr>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
          {
            this.state.actors.map(el => { return (
            
              <tr>
                <td>{el.name}</td>
                <td>{el.popularity}</td>
              </tr> )
            })
          }
        </table>
      </>
          )
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Actor />

      </header>
    </div>
  );
}

export default App;
