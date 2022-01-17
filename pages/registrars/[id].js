import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const RegistrarDetail = () => {
    const router = useRouter()
    const { id } = router.query
    const data = useSelector((state) => state.mainer.data)

    if(data[id] !== undefined) {
        return (
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