import Link from "next/link";
import { useSelector } from "react-redux";
import { registrarsList } from "../libs/registrarsList";

const Registrars = () => {
    const data = useSelector((state) => state.mainer.data)

    return (
        <>
            <h1 className="font-bold mt-8 mb-2">Dostupní registrátoři</h1>
            <div className="flex gap-2 flex-wrap">
                {data.map((registrator, registratorKey) => (
                    <Link key={registratorKey} href={`/registrars/${registratorKey}`}>
                        <a>
                            <div>
                                <img className="w-32" src={registrarsList[registrator.name].img} />
                                {registrator.name}
                            </div>
                        </a>
                    </Link>
                ))}
            </div>
        </>
    )
}

export default Registrars;