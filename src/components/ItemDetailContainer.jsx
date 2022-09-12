import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {

    const productsDetails = [
        {
            "id": 1,
            "title": "Jarrón Magnolia",
            "price": "$2500,00",
            "stock": "10",
            "imgUrl": "/img/art01.jpg",    
            "discount": "10",
            "material":"Vidrio",
            "size":"10 x 20cm",
            "description":"Jarrón pequeño de vidrio. Cuidados: limpieza con paño húmedo. No golpear."
        }
    ];

    const [items, setItems]= useState([]);

    useEffect (() => {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                (resolve(productsDetails))
            }, 3000);
        })

        promise.then ((res) => {
            setItems (productsDetails);
        });

    },[]);

    return (
        <ItemDetail items={items}/>
        );
        
}
 
export default ItemDetailContainer;