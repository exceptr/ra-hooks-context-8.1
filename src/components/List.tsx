import { DataItem } from "./Main"
import ListItem from "./ListItem"

interface ListProps {
    dataList: DataItem[]
    onSelectedItem: number | null
    selectItem: (id: number) => void
}
export default function List({dataList, onSelectedItem, selectItem}: ListProps) {
    return (
        <div className="list">
            {dataList.map((item) => (
                <ListItem 
                key={item.id} 
                item={item} 
                selected={onSelectedItem === item.id} 
                onClick={() => selectItem(item.id)}/>
            ))}
        </div>
    )
}