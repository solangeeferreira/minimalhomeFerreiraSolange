

const ItemDetail = ({items}) => {
    const {title, price, stock, discount, material, size, description, imgUrl} = items;

    return (  
        <>
        <div className="d-flex flex-row justify-content-center flex-wrap">
            <div className="card text-center" style={{width:"18rem"}} >
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
            </div>
        </div>
        <div className="d-flex justify-content-center">
            <button>Terminar compra</button>
        </div>
        </>);
}

 
export default ItemDetail;
