import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

const Cart = () => {
    const {cartItems, removeItem, clear, total} = useContext (CartContext);
    const tot = total();

        return ( 
        <>
        {cartItems.length === 0 ? ( 
        <h4>No agregaste ningún item al carrito. Agrega algunos 
            <Link to={"/"}>
                <button type="button" class="btn btn-outline-info">Ir a la tienda</button>
            </Link> </h4>) : (
                    <div className="container">
            <div className="row">
                {cartItems.map((element) => {
                    return(
                        <div className="col-sm" style={{margin:"1rem"}}>
                            <CartItem item={element.item} quantity={element.quantity} removeItem={removeItem} /> 
                        </div>
                    )})
                }
            </div>
            <button className="btn btn-outline-info" onClick={() => clear()}>Vaciar carrito</button>
            <h3>El precio total de la compra es de: {tot} </h3>
            </div>
                
            )
        }
        </>);
}
 
export default Cart;