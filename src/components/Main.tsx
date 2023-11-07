import { useEffect, useState } from "react";
import Details from "./Details";
import List from "./List";
import axios from "axios";

export interface DataItem {
    id: number;
    name: string;
}

export default function Main() {
    const [ dataList, setDataList ] = useState<DataItem[]>([]);
    const [ onSelectedItem, setOnSelectedItem ] = useState<number | null>(null);

    useEffect(() => {
        axios.get("https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json")
        .then((res) => setDataList(res.data))
        .catch((err) => console.log(err));
    },[]);

    const selectItem = (id: number) => {
        setOnSelectedItem(id);
    }
    
    return (
        <div className="main">
            <List
            selectItem={selectItem} 
            dataList={dataList}
            onSelectedItem={onSelectedItem}/>
            {onSelectedItem !== null && <Details id={onSelectedItem} />}
        </div>
    )
}