import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilterFormParams } from "../../app/mainSlice";

const collectTLDs = (data) => {
	let total = [];
	data.forEach(el => {
		el.domains.forEach(tld => {
			if(!total.includes(tld.domain)) total.push(tld.domain)
		});
	});
	return total
}

const FilterForm = () => {
	const data = useSelector((state) => state.mainer.data)
	const globalTLD = useSelector((state) => state.mainer.selectedTLD)
	const globalPeriod = useSelector((state) => state.mainer.selectedPeriod)
	const dispatch = useDispatch()

    const [domainName, setdomainName] = useState("");
	const [selectedTLD, setselectedTLD] = useState(globalTLD);
	const [period, setPeriod] = useState(globalPeriod);
	const [TLDList,] = useState(collectTLDs(data));
	const [checkButtonState, setCheckButtonState] = useState(true);

    const domainDataLoader = () => {
		dispatch(setFilterFormParams({TLD: selectedTLD, period: period}))
	}

    useEffect(() => {
		if(domainName !== "" && TLDList.includes(selectedTLD)) {
			setCheckButtonState(false)
		} else setCheckButtonState(true)
	}, [domainName, selectedTLD]);

    return (
        <>
			<div className="mb-2 flex flex-col gap-1">
                <p className="text-sm">
                    Pro srovnání cen u jednotlivých registrátorů si zvol doménu, u které zvažuješ koupi. Poté stiskni tlačítko <b>Zjistit ceny</b> a vyčkej na výpis všech registrátorů, které tato aplikace k této TLD eviduje.
                </p>
                <p className="text-sm">
                    V pravém horním rohu máš možnost si také nastavit například to, zda preferuješ ceny včetně či bez DPH.
                </p>
            </div>
            <div className="flex gap-2 flex-wrap mt-4">
				<label>
					<span className="text-gray-500 text-xs">Doména</span>
					<div className="w-72">
						<div className="relative rounded-md shadow-sm">
							<input type="text" className="block w-full pl-3 pr-32 sm:text-sm rounded-md focus:ring-primary-500 focus:border-primary-500 border-gray-300" placeholder="superdoména" onChange={e => setdomainName(e.target.value)}/>
							<div className="absolute inset-y-0 right-0 flex items-center">
								<input id="tld-choice" name="tld-choice" list="tlds" value={selectedTLD} placeholder=".cz" className="w-32 h-full py-0 pl-2 pr-1 sm:text-sm rounded-md focus:ring-primary-500 focus:border-primary-500 border-transparent bg-transparent text-gray-500" onChange={e => setselectedTLD(e.target.value)}/>
								<datalist id="tlds">
									{TLDList.map((tld, tldKey) => <option key={tldKey} value={tld}/>)}
								</datalist>
							</div>
						</div>
					</div>
				</label>
				<label>
					<span className="text-gray-500 text-xs">Počet roků</span>
					<input type="number" min="1" max="10" value={period} onChange={(e) => setPeriod(e.target.value)} className="block pl-3 sm:text-sm rounded-md focus:ring-primary-500 focus:border-primary-500 border-gray-300"/>
				</label>
				<label>
				<br />
				<button type="submit" className="flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:bg-gray-200" disabled={checkButtonState} onClick={domainDataLoader}>Zjistit ceny</button>
				</label>
			</div>
        </>
    )
}

export default FilterForm;