import { useState } from "react";

const collectTLDs = (data) => {
	let total = [];
	data.forEach(el => {
		let tlds = el.domains.map(el => el.domain)
		tlds.forEach(tld => {
			if(!total.includes(tld)) total.push(tld)
		});
	});
	return total
}

const Home = ({ data }) => {
	const [domainName, setDomainName] = useState("");
	const [selectedTLD, setSelectedTLD] = useState("")
	const [TLDList,] = useState(collectTLDs(data))

	return (
		<>
			<div>Domainx</div>
			<span>{domainName}.{selectedTLD}</span>
			<div>
				<input type="text" className="bg-green-100" placeholder="domena" onChange={e => setDomainName(e.target.value)}/>
				<input id="tld-choice" name="tld-choice" list="tlds" className="relative bg-green-100" placeholder="cz" onChange={e => setSelectedTLD(e.target.value)}/>
				<datalist id="tlds">
					{TLDList.map((tld, tldKey) => <option key={tldKey} value={tld}/>)}
				</datalist>
				<button type="button" disabled>Ověřit</button>
			</div>
			<h1 className="font-bold mt-8 mb-2">Dostupní registrátoři</h1>
			<div className="flex gap-2 flex-wrap">
				{data.map((registrator, registratorKey) => <div key={registratorKey}>{registrator.name}</div>)}
			</div>
			<h1 className="font-bold mt-8 mb-2">Dostupné TLDs</h1>
			<div className="flex gap-2 flex-wrap">
				{TLDList.map((tld, tldKey) => <div key={tldKey}>{tld}</div>)}
			</div>
		</>
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