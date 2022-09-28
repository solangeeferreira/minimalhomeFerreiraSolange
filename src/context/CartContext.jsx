import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({children}) => {
    const [cartItems, setCartItems] = useState ([]);

    const addItem = (item, quantity) => {
        const newItem = isInCart (item);
        //Si tengo un item repetido, sumo la cantidad y elimino el producto repetido.
        if (newItem) {
            quantity = quantity + newItem.quantity;
            setCartItems (cartItems.splice(cartItems.findIndex((x) => x.item.id === item.id),1))
        }

        setCartItems ([...cartItems, {item, quantity}]);
    };
    const removeItem = (itemId) => {
        setCartItems (cartItems.filter (x => x.item.id != itemId))

    };
    const clear = () => {
        setCartItems ([]);
    };
    const isInCart = (item) => {
        return cartItems.find ((x) => x.item === item);
    };

    const total = () => {
        return cartItems.reduce ((previousValue, currentValue) => previousValue + currentValue.item.price * currentValue.quantity, 
        0)
    };

    return ( 
        <CartContext.Provider value={{cartItems, setCartItems, addItem, removeItem, clear, isInCart, total}}>
            {children}
        </CartContext.Provider>
     );
}
 
export default CartProvider;