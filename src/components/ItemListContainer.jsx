import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";


const ItemListContainer = () => {

    const products = [
        {
            id: 1,
            title: "Florero Magnolia",
            price: "$2500,00",
            imgUrl: "/img/art01.jpg",
            category:"florero",
        },
        {
            id: 2,
            title: "Florero Ámbar",
            price: "$2500,00",
            imgUrl: "/img/art02.jpg",
            category:"florero",
        },
        {
            id: 3,
            title: "Lapicero David",
            price: "$2000,00",
            imgUrl: "/img/art03.jpg",
            category:"lapicero",
        },
        {
            id: 4,
            title: "Vela Silueta",
            price: "$1900,00",
            imgUrl: "/img/art04.jpg",
            category:"vela",
        },
        {
            id: 5,
            title: "Florero Almendra",
            price: "$2400,00",
            imgUrl: "/img/art05.jpg",
            category:"florero",
        },
        {
            id: 6,
            title: "Florero Marga",
            price: "$1800,00",
            imgUrl: "/img/art06.jpg",
            category:"florero",
        },
    
        ];

        const {name} = useParams();
    
        const [items, setItems] = useState([]);
    
        useEffect (() => {
            const promise = new Promise ((resolve, reject) => {
                setTimeout (() => (resolve (products)), 2000)
            })
    
            promise.then ((res) => {
                const prod = res;
                if (name) {
                   setItems(prod.filter((producto) => producto.category ==name)) 
                } else {
                    setItems(prod);
                }
                }); 
        }, [name]);
        
    return ( 
        <>
        <ItemCount/>
        <ItemList items={items}/>
        </>

     );
}
 
export default ItemListContainer;