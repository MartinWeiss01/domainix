import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setData } from "../app/mainSlice"
import ComparedTable from "../components/Home/ComparedTable";
import FilterForm from "../components/Home/FilterForm";
import Registrars from "../components/Registrars";

const Home = () => {
	const [ready, setReady] = useState(false);
	const dispatch = useDispatch();
	const [data, getData] = useState([]);

	useEffect(() => {
		fetch('https://srv.martinweiss.cz/api/v1/domainix')
		.then(response => {
		  if(response.ok) return response.json();
		  return Promise.reject(response);
		})
		.then(data => {
			getData(data)
			dispatch(setData(data))
			setReady(true)
		})
		.catch(err => console.error(`[!] An error occurred while processing the script.`));
	}, [])

	if(ready) {
		return (
			<div>	
				<FilterForm />
				<ComparedTable />
				<Registrars />
			</div>
		)
	} else {
		return (
			<span>Načítání...</span>
		)
	}
	
}

export default Home