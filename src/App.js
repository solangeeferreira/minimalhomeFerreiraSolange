import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Cart from './components/Cart';
import CartProvider from './context/CartContext';

function App() {
  return (
    <>
    <CartProvider>
    <BrowserRouter>
    <NavBar name={'Minimal Home'} />
    <Routes>
      <Route index element={<ItemListContainer/>} />
      <Route path='/category/:name' element={<ItemListContainer/>} />
      <Route path='/item/:id' element={<ItemDetailContainer/>} />
      <Route path='/cart' element={<Cart/>}/>
    </Routes>
    </BrowserRouter>      
    </CartProvider>
    </>
  );
}

export default App;
