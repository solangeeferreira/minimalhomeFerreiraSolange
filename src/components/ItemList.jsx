import Item from "./Item";

const ItemList = ({items}) => {

    return ( 
    <>
    <div className="container">
        <div className="row">
            {items.map((item) => {
                return(
                    <div key={item.id} className="col-sm" style={{margin:"1rem"}}>
                        <Item item={item} />   
                    </div>
                )})
            }
        </div>
    </div>
    </>);
}
 
export default ItemList;