import Link from "next/link";
import { useSelector } from "react-redux";
import { registrarsList } from "../../libs/registrarsList";

const RegistrarsPage = () => {
    const data = useSelector((state) => state.mainer.data)

    return (
        <>
            <p className="text-gray-400 text-sm mb-6">Pro zobrazení podrobností zvol libovolného registrátora z nabídky:</p>
            <div className="grid grid-cols-2 gap-y-2 sm:grid-cols-3 md:grid-cols-2 md:gap-y-8 lg:grid-cols-4 xl:grid-cols-5 gap-x-4">
                {data.map((registrator, registratorKey) => 
                    registrarsList[registrator.name] ? (
                        <div className="flex justify-center items-center">
                            <Link key={registratorKey} href={`/registrars/${registrator.slug}`}>
                                <a className="flex justify-center items-center w-40 h-20 opacity-50 hover:opacity-100 transition-opacity">
                                    <img className="max-h-full" src={registrarsList[registrator.name].img} />
                                </a>
                            </Link>
                        </div>
                    ) : (<></>)
                    )}
            </div>
        </>
    )
}

export default RegistrarsPage;