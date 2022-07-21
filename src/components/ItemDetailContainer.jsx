import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import details from "./utils/details.json";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const {id} = useParams();
    const [items, setItems] = useState ({});
    const promise = new Promise ((resolve) => {
        setTimeout(() => resolve(details), 2000);
    }); 

    useEffect (()=> {
        promise.then ((res)=> {
            const productDetail = res.filter((product) => product.id == id);
            setItems (productDetail [0]);
        });
    },[]);
    
    return (
        <ItemDetail items={items} />
    ); 
}
 
export default ItemDetailContainer;