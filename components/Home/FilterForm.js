import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTLD } from "../../app/mainSlice";

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

const FilterForm = () => {
	const data = useSelector((state) => state.mainer.data)
	const dispatch = useDispatch()

    const [domainName, setdomainName] = useState("");
	const [selectedTLD, setselectedTLD] = useState("");
	const [TLDList,] = useState(collectTLDs(data));
	const [checkButtonState, setCheckButtonState] = useState(true);

    const domainDataLoader = () => {
		dispatch(setTLD(selectedTLD))
	}

    useEffect(() => {
		if(domainName !== "" && TLDList.includes(selectedTLD)) {
			setCheckButtonState(false)
		} else setCheckButtonState(true)
	}, [domainName, selectedTLD]);

    return (
        <>
            <div className="flex gap-2">
				<div className="w-72">
					<div className="relative rounded-md shadow-sm">
						<input type="text" className="block w-full pl-3 pr-32 sm:text-sm rounded-md focus:ring-primary-500 focus:border-primary-500 border-gray-300" placeholder="superdoména" onChange={e => setdomainName(e.target.value)}/>
						<div className="absolute inset-y-0 right-0 flex items-center">
							<label htmlFor="currency" className="sr-only">TLD</label>
							<input id="tld-choice" name="tld-choice" list="tlds" placeholder=".cz" className="w-32 h-full py-0 pl-2 pr-1 sm:text-sm rounded-md focus:ring-primary-500 focus:border-primary-500 border-transparent bg-transparent text-gray-500" onChange={e => setselectedTLD(e.target.value)}/>
							<datalist id="tlds">
								{TLDList.map((tld, tldKey) => <option key={tldKey} value={tld}/>)}
							</datalist>
						</div>
					</div>
				</div>
				<button type="submit" className="flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:bg-gray-200" disabled={checkButtonState} onClick={domainDataLoader}>Zjistit ceny</button>
			</div>
        </>
    )
}

export default FilterForm;