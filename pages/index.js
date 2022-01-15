import { useDispatch } from "react-redux";
import { setData } from "../app/mainSlice"
import ComparedTable from "../components/Home/ComparedTable";
import FilterForm from "../components/Home/FilterForm";

const Home = ({ data }) => {
	const dispatch = useDispatch()
	dispatch(setData(data))
	return (
		<div className="h-screen flex flex-col items-center justify-center content-center">
			<div>Domainx</div>

			<FilterForm />
			<ComparedTable />

			<h1 className="font-bold mt-8 mb-2">Dostupní registrátoři</h1>
			<div className="flex gap-2 flex-wrap">
				{data.map((registrator, registratorKey) => <div key={registratorKey}>{registrator.name}</div>)}
			</div>
		</div>
	)
}

export async function getServerSideProps(context) {
	const response = await fetch('https://srv.martinweiss.cz/api/v1/domainix');
	const data = await response.json();

	return {
		props: {
			data
		}
	}
}

export default Home