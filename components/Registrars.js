import Link from "next/link";
import { useSelector } from "react-redux";
import { registrarsList } from "../libs/registrarsList";

const Registrars = () => {
    const data = useSelector((state) => state.mainer.data)

    return (
        <>
            <div className="flex gap-10 flex-wrap">
                {data.map((registrator, registratorKey) => (
                    <Link key={registratorKey} href={`/registrars/${registratorKey}`}>
                        <a className="flex justify-center items-center w-40 h-20 opacity-50 hover:opacity-100 transition-opacity">
                            <img className="max-h-full" src={registrarsList[registrator.name]?.img || "https://via.placeholder.com/256x128"} />
                        </a>
                    </Link>
                ))}
            </div>
        </>
    )
}

export default Registrars;