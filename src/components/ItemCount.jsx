import { useState } from "react";

const ItemCount = () => {
    const stock =10;
    const [count, setCount] = useState(0);
    const registrarClick = (operacion) => {
        if (operacion === "remove" && count > 0){
            setCount(count-1);
        } else if (operacion === "add" && count<stock){
            setCount(count+1);
        }
    }
    return ( 
        <>
        <button onClick={() => registrarClick("remove")}>-</button>
        {count}
        <button onClick={() => registrarClick("add")}>+</button>
        </>
        );
}
 
export default ItemCount;


