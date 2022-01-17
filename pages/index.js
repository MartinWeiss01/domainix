import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setData } from "../app/mainSlice"
import ComparedTable from "../components/Home/ComparedTable";
import FilterForm from "../components/Home/FilterForm";

const Home = () => {
	const [ready, setReady] = useState(false);
	const dispatch = useDispatch();

	useEffect(() => {
		fetch('https://srv.martinweiss.cz/api/v1/domainix')
		.then(response => {
		  if(response.ok) return response.json();
		  return Promise.reject(response);
		})
		.then(data => {
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
			</div>
		)
	} else {
		return (
			<span>Načítání...</span>
		)
	}
	
}

export default Home