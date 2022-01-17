import Link from "next/link";
import { useSelector } from "react-redux";
import { registrarsList } from "../libs/registrarsList";

const Registrars = () => {
    const data = useSelector((state) => state.mainer.data)

    return (
        <>
            <h1 className="font-bold mt-8 mb-2">Dostupní registrátoři</h1>
            <div className="flex gap-6 flex-wrap">
                {data.map((registrator, registratorKey) => (
                    <Link key={registratorKey} href={`/registrars/${registratorKey}`}>
                        <a className="opacity-50 hover:opacity-100 transition-opacity">
                            <img className="w-32" src={registrarsList[registrator.name].img} />
                        </a>
                    </Link>
                ))}
            </div>
        </>
    )
}

export default Registrars;