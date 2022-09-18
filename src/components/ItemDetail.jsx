import { useState, useContext } from "react";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";


const ItemDetail = ({items}) => {
    const {addItem} = useContext(CartContext);
    const {setCartItems} = useContext(CartContext);


    const [amount, setAmount] = useState(0);
    const {title, price, stock, discount, material, size, description, imgUrl} = items;
    const onAdd = (count) => {
        addItem (items, count);

        setAmount(count);
    };

    return (  
        <>
        <div className="d-flex flex-row justify-content-center flex-wrap">
            <div className="card text-center" style={{width:"20rem"}} >
            <img src={imgUrl} className="card-img-top" alt="Foto de producto"/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{price}</p>
                <p className="card-text">{stock} unidades disponibles</p>
                <p className="card-text">Descuento: {discount}%</p>
                <p className="card-text">Material: {material}</p>
                <p className="card-text">Tamaño:{size}</p>
                <p className="card-text">Descripción: {description}</p>
            </div>
            {amount == 0 && <ItemCount onAdd={onAdd}/>}
            </div>
        </div>
        <div className="d-flex justify-content-center">
            <Link to={"/cart"}>
            <button type="button" class="btn btn-outline-info">Terminar compra</button>            
            </Link>
        </div>
        </>);
}

 
export default ItemDetail;
