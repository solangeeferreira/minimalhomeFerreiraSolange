import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <>
    <NavBar name={'Minimal Home'} />
    <ItemListContainer greeting={'Bienvenidos a Minimal Home'} />
    </>

  );
}

export default App;
