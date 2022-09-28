const CartItem = ({item, quantity, removeItem}) => {

    return ( 
        <div className="card text-center d-flex flex-row justify-content-center" style={{width:"20rem"}} >
            <div className="card-body">
                <h6 className="card-title">{item.title}</h6>
                <p className="card-text">{item.price}</p>
                <p>{quantity}</p>
                <button className="btn btn-outline-info" onClick={() => removeItem(item.id)}>Eliminar</button>
            </div>
        </div>);
}
 
export default CartItem;