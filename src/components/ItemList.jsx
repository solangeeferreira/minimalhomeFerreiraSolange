import Item from "./Item";

const ItemList = (props) => {

    return ( 
    <>
        {
            props.items.map((cadaItem) => {
                        return(
                        <Item title={cadaItem.title} price={cadaItem.price} img={cadaItem.imgUrl} />   
                    )})
        }
    </>);
}
 
export default ItemList;
