import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import CartWidget from './components/CartWidget';
import Cart from './components/Cart';

function App() {
  return (
    <>
    <BrowserRouter>
      <NavBar name={'Minimal Home'} />
      <Routes>
        <Route index element={<ItemListContainer/>} />
        <Route path='/nav' element={<NavBar name={'Minimal Home'}/>} />
        <Route path='/category/:name' element={<ItemListContainer/>} />
        <Route path='/item/:id'element={<ItemDetailContainer/>} />
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </BrowserRouter>
    </>

  );
}

export default App;
