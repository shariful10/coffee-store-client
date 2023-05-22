import { useLoaderData } from "react-router-dom";
import "./App.css";
import CoffeeCard from "./Components/CoffeeCard";
import { useState } from "react";

function App() {
	const loadedCoffees = useLoaderData();
	const [coffees, setCoffees] = useState(loadedCoffees);

	return (
		<div className="my-container">
			<h1 className="text-6xl text-center text-purple-600">
				Hot Cold Coffee: {coffees.length}
			</h1>
			<div className="grid md:grid-cols-2 gap-6 mt-12">
				{coffees.map((coffee) => (
					<CoffeeCard
						key={coffee._id}
						coffee={coffee}
						coffees={coffees}
						setCoffees={setCoffees}></CoffeeCard>
				))}
			</div>
		</div>
	);
}

export default App;
