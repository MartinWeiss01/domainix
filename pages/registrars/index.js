import Link from "next/link";
import { useSelector } from "react-redux";
import { registrarsList } from "../../libs/registrarsList";

const RegistrarsPage = () => {
    const data = useSelector((state) => state.mainer.data)

    return (
        <div className="flex gap-10 flex-wrap">
            {data.map((registrator, registratorKey) => 
                registrarsList[registrator.name] ? (
                    <Link key={registratorKey} href={`/registrars/${registrator.slug}`}>
                        <a className="flex justify-center items-center w-40 h-20 opacity-50 hover:opacity-100 transition-opacity">
                            <img className="max-h-full" src={registrarsList[registrator.name].img} />
                        </a>
                    </Link>
                ) : (<></>)
            )}
        </div>
    )
}

export default RegistrarsPage;