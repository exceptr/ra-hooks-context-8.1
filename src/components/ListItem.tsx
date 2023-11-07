import { DataItem } from "./Main";

interface ListItemProps {
    item: DataItem
    selected: boolean
    onClick: () => void
}

export default function ListItem({item, selected, onClick}: ListItemProps) {
    const className = selected ? 'list-item selected' : 'list-item';
    return (
        <div className={className} onClick={onClick}>
            {item.name}
        </div>
    )
}