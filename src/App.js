// import logo from './logo.svg';
import './App.css';
import NavBar from './components/Navbar/NavBar';
import Footer from './components/Footer/Footer';
// import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/itemDetailContainer/itemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {
  return (
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
          <Route path='*' element={
          <h2>Pagina no encontrada ,vuelva atras</h2>}/>
          
        
      </Routes>
      </div>
      <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
