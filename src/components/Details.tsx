import axios from "axios";
import { useEffect, useState } from "react";

interface DetailsProps {
    id: number | null
}

interface DataDetails {
    id: number
    name: string
    avatar: string
    details: {
        city: string
        company: string
        position: string
    }
}
export default function Details({id}: DetailsProps) {
    const [ detailsItem, setDetailsItem ] = useState<DataDetails>();
    const [ isLoading, setIsLoading ] = useState<boolean>(false);

    useEffect(() => {
        if (id !== null) {
            setIsLoading(true);
            axios.get(`https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${id}.json`)
            .then(res => {
                setDetailsItem(res.data);
                setIsLoading(false);
            })
            .catch(err => { 
                setIsLoading(false); 
                console.log(err);
            });
        } else setIsLoading(false);
    },[id]);

    return (
        <div className="details">
            {isLoading ? (
                <p>Loading...</p>
            ) : detailsItem ? (
                <>
                    <img src={detailsItem.avatar} alt="avatar" />
                    <span className="details-name">{detailsItem.name}</span>
                    <span className="details-other">City: {detailsItem.details.city}</span>
                    <span className="details-other">Company: {detailsItem.details.company}</span>
                    <span className="details-other">Position: {detailsItem.details.position}</span>
                </>
            ) : (
                <p>No data selected</p>
            )}
        </div>
    );
}