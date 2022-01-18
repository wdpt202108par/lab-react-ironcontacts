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
		contacts: contacts, // [ {}, {}, {}, {}, {} ]
	};
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<h1>Iron Contact</h1>
					<button
						onClick={() => {
							this.state.actors.push(
								contacts[
									Math.floor(Math.random(this.contacts) * contacts.length)
								]
							);
							console.log(this.state.actors);
							//augmenter +1 (add 1 actor )
							this.setState({
								contacts: this.state.contacts,
							});
						}}
					>
						Add Random Contact
					</button>

					<button
						onClick={() => {
							const alphabetSorted = this.state.contacts.sort(function (a, b) {
								// a is greater than b by the ordering criterion
								if (a.name > b.name) {
									return 1;
								}
								//a is less than b by some ordering criterion
								if (a.name < b.name) {
									return -1;
								}
								return 0;
							});
							console.log(alphabetSorted);

							this.setState({
								contacts: this.state.contacts,
							});
						}}
					>
						Sort by name
					</button>

					<button
						onClick={() => {
							const popularitySorted = this.state.contacts.sort(function (
								a,
								b
							) {
								if (a.popularity < b.popularity) {
									return 1;
								}
								if (a.popularity > b.popularity) {
									return -1;
								}
								return 0;
							});
							console.log("popularity sorted:", popularitySorted);
							this.setState({
								contacts: this.state.contacts,
							});
						}}
					>
						Sort by popularity
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
										<td>{el.popularity.toFixed(2)}</td>
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
