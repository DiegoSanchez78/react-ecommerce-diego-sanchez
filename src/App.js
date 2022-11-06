
import './App.css';
import NavBar from './components/Navbar/NavBar';
import Footer from './components/Footer/Footer';
import ItemDetailContainer from './components/itemDetailContainer/itemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import CartRoute from './components/Cart/cart.jsx';
import CartContextProvider from './context/carContext';
import Checkout from './components/Checkout/checkout.jsx';



function App() {
 
  return (
    <CartContextProvider>
      <BrowserRouter >
        <div className="App">
          <NavBar/> 
            <div className='App-header'>
          <Routes >
              <Route  path='/' element={<ItemListContainer/>}/>
              <Route path='/guitar/:itemid' element={<ItemDetailContainer/>}/>
              <Route  path='/categoria/:cat' element={<ItemListContainer/>}/>
              <Route  path='/cart' element={<CartRoute/> }/>
              <Route path='/checkout/:orderId' element={<Checkout/>}/>
              <Route path='*' element={
              <h2>Pagina no encontrada ,vuelva atras</h2>}/>
          </Routes>
          </div>
            <Footer/>
        </div>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
