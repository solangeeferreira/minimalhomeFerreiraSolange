import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import details from "./utils/details.json";

const ItemDetailContainer = () => {
    const [items, setItems] = useState ([]);
    const promise = new Promise ((resolve, reject) => {
        setTimeout(() => resolve(details), 2000);
    }); 

    useEffect (()=> {
        promise.then ((res)=> setItems(res));
    },[]);
    
    return (
        <ItemDetail items={items} />
    ); 
}
 
export default ItemDetailContainer;