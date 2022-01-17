import { useSelector } from "react-redux";
import { ShoppingCartIcon } from "@heroicons/react/solid";
import { registrarsList } from "../../libs/registrarsList";
import Link from "next/link";

const initTableList = (data, tld) => {
    let tempTableList = [];
    data.forEach((reg, regKey) => {
        for(let i = 0; i < reg.domains.length; i++) {
            if(reg.domains[i].domain === tld) {
                tempTableList.push({regIndex: regKey, domainIndex: i});
                break;
            }
        }
    });

    tempTableList.sort((a, b) => {return ((data[a.regIndex].domains[a.domainIndex].priceReg)+(data[a.regIndex].domains[a.domainIndex].priceRen)) - ((data[b.regIndex].domains[b.domainIndex].priceReg)+(data[b.regIndex].domains[b.domainIndex].priceRen))})
    return tempTableList;
}

const ComparedTable = () => {
    const data = useSelector((state) => state.mainer.data)
    const selectedTLD = useSelector((state) => state.mainer.selectedTLD)
    const tableList = initTableList(data, selectedTLD)

    return (
        <div className="py-4">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50 rounded-md">
                    <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Registrátor</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cena registrace (vč. DPH/bez DPH)</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cena prodloužení (vč. DPH/bez DPH)</th>
                        <th scope="col" className="relative px-6 py-3"><span className="sr-only">Edit</span></th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {tableList.map((row, rowKey) => (
                        <tr key={rowKey}>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                                <div className="flex-shrink-0 h-10 w-10 flex items-center">
                                    <img className="w-10" src={registrarsList[data[row.regIndex].name].img} alt="" />
                                </div>
                                <div className="ml-4">
                                    <div className="text-sm font-medium text-gray-900">{data[row.regIndex].name}</div>
                                    <div className="text-sm text-gray-500">Doména {data[row.regIndex].domains[row.domainIndex].domain}</div>
                                </div>
                            </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">{(data[row.regIndex].domains[row.domainIndex].priceReg*1.21).toFixed(2)} Kč</div>
                            <div className="text-sm text-gray-500">{(data[row.regIndex].domains[row.domainIndex].priceReg).toFixed(2)} Kč</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">{(data[row.regIndex].domains[row.domainIndex].priceRen*1.21).toFixed(2)} Kč</div>
                            <div className="text-sm text-gray-500">{(data[row.regIndex].domains[row.domainIndex].priceRen).toFixed(2)} Kč</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <div title="Přejít k registrátorovi" className="flex justify-center items-center">
                                <Link href={registrarsList[data[row.regIndex].name].link}>
                                    <a target="_blank" className="text-indigo-600 hover:text-indigo-900">
                                        <ShoppingCartIcon className="h-5 w-5"/>
                                    </a>
                                </Link>
                            </div>
                        </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ComparedTable;