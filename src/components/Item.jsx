const Item = ({item}) => {
    const {title, price, imgUrl, id} = item;
    return ( 
        <div className="card text-center d-flex flex-column justify-content-center" style={{width:"20rem"}} >
            <img src={imgUrl} className="card-img-top" alt="Foto de producto"/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{price}</p>
                <button className="btn btn-outline-info">Comprar</button>
            </div>
        </div>);
}
 
export default Item;