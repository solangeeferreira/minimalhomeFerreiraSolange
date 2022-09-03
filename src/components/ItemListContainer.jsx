import ItemCount from "./ItemCount";

const ItemListContainer = ({greeting}) => {
    return ( 
        <>
        <h5>
        <ItemCount/>
            {greeting}
        </h5>        
        </>

     );
}
 
export default ItemListContainer;