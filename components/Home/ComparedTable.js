import { useSelector } from "react-redux";

const initTableList = (data, tld) => {
    let tempTableList = [];
    data.forEach((reg, regKey) => {
        for(let i = 0; i < reg.domains.length; i++) {
            if(reg.domains[i].domain === tld) {
                tempTableList.push({regIndex: regKey, domainIndex: i});
                break;
            }
        }
    });
    return tempTableList;
}

const ComparedTable = () => {
    const data = useSelector((state) => state.mainer.data)
    const selectedTLD = useSelector((state) => state.mainer.selectedTLD)
    const tableList = initTableList(data, selectedTLD)

    return (
        <div>
            {tableList.map((el, key) => 
                <div key={key}>{data[el.regIndex].name}: {data[el.regIndex].domains[el.domainIndex].domain}</div>
            )}
        </div>
    )
}

export default ComparedTable;