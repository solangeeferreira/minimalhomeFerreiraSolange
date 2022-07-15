const Item = ({title, price, img}) => {
    return ( 
    <div className="card" style={{width:"18rem"}} >
        <img src={img} className="card-img-top" alt="Foto de producto"/>
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{price}</p>
            <a href="#" className="btn btn-primary">Buy</a>
        </div>
    </div>

     );
}
 
export default Item;