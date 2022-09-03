import { useState } from "react";

const ItemCount = ({stock=10, inicial=0, onAdd}) => {
    const [count, setCount] = useState(inicial);
    const registrarClick = (operacion) => {
        if (operacion === "remove" && count > 0){
            setCount(count-1);
        } else if (operacion === "add" && count<stock){
            setCount(count+1);
        }
    }
    return ( 
        <>
        <div className="input-group input-spinner mb-3 d-flex justify-content-center">
            <input type="number" value={count} />
            <button onClick={() => registrarClick("remove")} type="button" class="btn btn-outline-info">-</button>
            <button onClick={() => registrarClick("add")} type="button" class="btn btn-outline-info">+</button>
        </div>
        <div className="d-flex justify-content-center">
            <button onClick={() => onAdd(count)} type="button" class="btn btn-outline-info">Comprar</button>
        </div>
        </>
        );
}
 
export default ItemCount;