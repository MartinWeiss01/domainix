import Link from "next/link";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { registrarsList } from "../../libs/registrarsList";
import { ExternalLinkIcon } from "@heroicons/react/outline"

const RegistrarDetail = () => {
    const router = useRouter()
    const { id } = router.query
    const data = useSelector((state) => state.mainer.data)

    if(data[id] !== undefined) {
        return (
            <>
                <div>
                    <div className="bg-white shadow-xl rounded-lg overflow-hidden mb-8 max-w-md">
                        <div className="bg-cover bg-center h-32 p-4 flex justify-center items-center" >
                            <img className="max-h-full" src={registrarsList[data[id].name]?.img || "https://via.placeholder.com/256x128"} />
                        </div>

                        <div class="px-4 pb-3 pt-4 bg-gray-100 flex justify-between flex-wrap">
                        <div class="text-xs uppercase font-bold text-gray-600 tracking-wide">
                            {data[id].name}
                        </div>
                        <Link href={registrarsList[data[id].name]?.link || "/"}>
                            <a target="_blank">
						        <div class="flex text-xs uppercase font-bold text-gray-600 tracking-wide items-center">Web <ExternalLinkIcon className="h-4 w-4" /></div>
                            </a>
                        </Link>
                    </div>

                        <div className="flex justify-between items-center p-4 border-t border-gray-300 text-gray-600 flex-wrap">
                            <div className="flex items-center">
                                <p><span className="text-sm pr-1">Počet TLDs</span> <span className="text-gray-900 font-bold">{data[id].domains.length}</span></p>
                            </div>
                            <div className="flex items-center">
                                <p><span className="text-sm pr-1">Aktualizováno</span> <span className="text-gray-900 font-bold">{data[id].updated}</span></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50 rounded-md">
                                <tr>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Doména</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cena registrace (vč. DPH/bez DPH)</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cena prodloužení (vč. DPH/bez DPH)</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {data[id].domains.map((row, rowKey) => (
                                    <tr key={rowKey}>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center">
                                            <span className="text-sm font-medium text-gray-900">{row.domain}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-900">{(row.priceReg*1.21).toFixed(2)} Kč</div>
                                        <div className="text-sm text-gray-500">{(row.priceReg).toFixed(2)} Kč</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-900">{(row.priceRen*1.21).toFixed(2)} Kč</div>
                                        <div className="text-sm text-gray-500">{(row.priceRen).toFixed(2)} Kč</div>
                                    </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </>
        )
    } else {
        return (
            <>
                Registrátor nenalezen!
            </>
        )
    }

}

export default RegistrarDetail;