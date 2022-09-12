import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import details from "./utils/details.json"

const ItemDetailContainer = () => {
    const {id} = useParams();
    const [items, setItems]= useState({});

    const promise = new Promise((resolve, reject) => {
        setTimeout(() => (resolve(details)), 3000);
    })

    useEffect (() => {
        promise.then ((res) => {
            const foundItem = res.filter (item => item.id == id)
            setItems(foundItem[0]);
        });

    },[]);

    return (
        <ItemDetail items={items}/>
        );
        
}
 
export default ItemDetailContainer;