import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import { useEffect, useState } from "react";


const ItemListContainer = (props) => {
    const products = [
    {
        id: 1,
        title: "Jarrón Magnolia",
        price: "$2500,00",
        imgUrl: "/img/art01.jpg",
    },
    {
        id: 2,
        title: "Florero Ámbar",
        price: "$2500,00",
        imgUrl: "/img/art02.jpg",
    },
    ];

    const [items, setItems] = useState([]);

    useEffect (() => {
        const promise = new Promise ((resolve, reject) => {
            setTimeout (() => (resolve (products)), 2000)
        })

        promise
            .then ((res) =>{
                setItems(products);
            }) 
            .catch ((err) => console.error(err)) 
    }, []);
    


    return ( 
        <>
        <ItemCount/>
        <ItemList items={items} />
        </>
     );
}
 
export default ItemListContainer;