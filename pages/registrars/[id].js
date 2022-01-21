import Link from "next/link";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { registrarsList } from "../../libs/registrarsList";
import { ExternalLinkIcon } from "@heroicons/react/outline"
import ErrorPage from "next/error";
import { useEffect, useState } from "react";
import Loading from "../../components/Loading";

const getRegistrarIDBySlug = (data, slug) => {
    for(let i = 0; i < data.length; i++) {
        if(data[i].slug === slug) {
            return i
        }
    }
}

const RegistrarDetail = () => {
    const router = useRouter()
    const data = useSelector((state) => state.mainer.data)
    const taxes = useSelector((state) => state.mainer.taxes)
    const { id } = router.query
    const regIndex = getRegistrarIDBySlug(data, id)
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        setLoaded(true)
    }, [])

    if(loaded) {
        if(data[regIndex] !== undefined) {
            return (
                <>
                    <div>
                        <div className="bg-white shadow-xl rounded-lg overflow-hidden mb-8 max-w-md">
                            <div className="bg-cover bg-center h-32 p-4 flex justify-center items-center">
                                <img className="max-h-full" src={registrarsList[data[regIndex].name]?.img || "https://via.placeholder.com/256x128"} />
                            </div>

                            <div className="px-4 pb-3 pt-4 bg-gray-100 flex justify-between flex-wrap">
                            <div className="text-xs uppercase font-bold text-gray-600 tracking-wide">
                                {data[regIndex].name}
                            </div>
                            <Link href={registrarsList[data[regIndex].name]?.link || "/"}>
                                <a target="_blank">
                                    <div className="flex text-xs uppercase font-bold text-gray-600 tracking-wide items-center">Web <ExternalLinkIcon className="h-4 w-4" /></div>
                                </a>
                            </Link>
                        </div>

                            <div className="flex justify-between items-center p-4 border-t border-gray-300 text-gray-600 flex-wrap">
                                <div className="flex items-center">
                                    <p><span className="text-sm pr-1">Počet TLDs</span> <span className="text-gray-900 font-bold">{data[regIndex].domains.length}</span></p>
                                </div>
                                <div className="flex items-center">
                                    <p><span className="text-sm pr-1">Aktualizováno</span> <span className="text-gray-900 font-bold">{data[regIndex].updated}</span></p>
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
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Registrace</th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Prodloužení</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {data[regIndex].domains.map((row, rowKey) => (
                                        <tr key={rowKey}>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <span className="text-sm font-medium text-gray-900">{row.domain}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className={`priceTaxes ${taxes ? "preferred" : "notPreferred"}`}>{(row.priceReg*1.21).toFixed(2)} Kč</div>
                                                <span className="ml-1 text-[8px] text-gray-400">(vč. DPH)</span>
                                            </div>
                                            <div className={`priceTaxes ${!taxes ? "preferred" : "notPreferred"}`}>{(row.priceReg).toFixed(2)} Kč</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className={`priceTaxes ${taxes ? "preferred" : "notPreferred"}`}>{(row.priceRen*1.21).toFixed(2)} Kč</div>
                                                <span className="ml-1 text-[8px] text-gray-400">(vč. DPH)</span>
                                            </div>
                                            <div className={`priceTaxes ${!taxes ? "preferred" : "notPreferred"}`}>{(row.priceRen).toFixed(2)} Kč</div>
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
                <ErrorPage statusCode="404"/>
            )
        }
    } else {
        return <Loading />
    }
}

export default RegistrarDetail;