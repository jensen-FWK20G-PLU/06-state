import React from 'react';
import './App.css';
import { RecoilRoot } from 'recoil'
import UserName from './components/header/UserName'
import ShowUser from './components/header/ShowUser'
import Counter from './components/Counter'

function App() {
	return (
		<RecoilRoot>
		<div className="App">
			<header>
				<UserName />
				<ShowUser />
			</header>
			<main>
				<h1> Verktygsaffären </h1>

				<Counter />

				<section>
					Lägga till en ny produkt
				</section>

				<section>
					Lista alla produkter
				</section>
			</main>
		</div>
		</RecoilRoot>
	);
}

export default App;
