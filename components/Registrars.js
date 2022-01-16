import Link from "next/link";
import { useSelector } from "react-redux";

const registrarsList = {
    Wedos: {img: "/registrars/wedos.png"},
    Subreg: {img: "/registrars/subreg.png"},
    Forpsi: {img: "/registrars/forpsi.svg"},
    Pipni: {img: "/registrars/pipni.png"},
    Endora: {img: "/registrars/endora.png"},
    Websupport: {img: "/registrars/websupport.svg"},
}

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