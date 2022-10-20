
import './App.css';
import NavBar from './components/Navbar/NavBar';
import Footer from './components/Footer/Footer';
// import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/itemDetailContainer/itemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
// eslint-disable-next-line
import CartRoute from './components/Cart/cart.jsx';
import CartContextProvider from './context/carContext';

import Checkout from './components/Checkout/checkout.jsx';
// import firestore, { exportDataToFirebase } from "./service/firestore"


function App() {
 
  return (
    <CartContextProvider>
      {/* <button onClick={exportDataToFirebase} >envio de items a firebase</button> */}
      <BrowserRouter >
        <div className="App">
          <NavBar/> 
          <div className='App-header'>
              {/* <ItemListContainer/> */}
          <Routes >
          {/* <section className="App-header"> */}
              
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
