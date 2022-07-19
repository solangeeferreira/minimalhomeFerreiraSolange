const Item = ({title, price, img}) => {
    return ( 
        <div className="d-flex flex-row justify-content-center flex-wrap">
        <div className="card text-center " style={{width:"18rem"}} >
            <img src={img} className="card-img-top" alt="Foto de producto"/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{price}</p>
                <a href="#" className="btn btn-primary">Comprar</a>
            </div>
        </div>
    </div>
     );
}
 
export default Item;