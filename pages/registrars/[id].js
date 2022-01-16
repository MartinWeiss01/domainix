import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const RegistrarDetail = () => {
    const router = useRouter()
    const { id } = router.query
    const data = useSelector((state) => state.mainer.data)

    if(data[id] !== undefined) {
        return (
            <>
                <p>
                    RegistrarDetail {id}
                </p>
                <p>
                    {JSON.stringify(data[id])}
                </p>
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