import { Link } from "react-router-dom";

const Item = ({item}) => {
    const {title, price, imgUrl, id} = item;
    return ( 
        <div className="card text-center d-flex flex-column justify-content-center" style={{width:"20rem"}} >
            <img src={imgUrl} className="card-img-top" alt="Foto de producto"/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{price}</p>
                <Link to={`/item/${id}`}>
                <button className="btn btn-outline-info">Ver Detalle</button>
                </Link>


            </div>
        </div>);
}
 
export default Item;