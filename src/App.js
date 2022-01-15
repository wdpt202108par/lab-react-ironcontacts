import logo from "./logo.svg";
import { Component } from "react";
import "./App.css";
import contacts from "./contacts.json";

// recupérer les 5 premiers contacts
const actors = contacts.splice(0, 5);

//change the App function to the class component
class App extends Component {
	state = {
		actors: actors,
		contacts: contacts,
		contactsEnd: contacts.slice(5, contacts.length), // [ {}, {}, {}, {}, {} ]
	};

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<h1>Iron Contact</h1>
					<button
						onClick={() => {
							console.log("coucou");
							// 1. tirer au sort un acteur de la liste json
							const random = Math.floor(
								Math.random() * this.state.contacts.length
							);
							console.log(random);
							// 2. faire une copie de this.state.actor
							const contactsCopy = [...this.state.contacts];
							console.log("copy:", contactsCopy);
							// 3. sur cette copie on va .push 1.
							let contactsEnd = Math.floor(Math.random()[1]);
							contactsCopy.push(contactsEnd);
							//	console.log("push:", );
						}}
					>
						Add Random Contact
					</button>
					<table>
						<thead>
							<tr>
								<th>Name</th>
								<th>Popularity</th>
							</tr>
						</thead>
						<tbody>
							{/* [ <tr key="">, <tr key="">, <tr> ] */}
							{this.state.actors.map((el) => {
								return (
									<tr key={el.id}>
										<td>
											<img src={el.pictureUrl} alt="actor" />
										</td>
										<td>{el.name}</td>
										<td>{el.popularity}</td>
									</tr>
								);
							})}
						</tbody>
					</table>
				</header>
			</div>
		);
	}
}

export default App;
