// import logo from './logo.svg';
import './App.css';
import NavBar from './components/Navbar/NavBar';
import Footer from './components/Footer/Footer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {
  return (
    <div className="App">
      <NavBar/> 
      <section className="App-header">
        <ItemListContainer/>
      </section>
      <Footer/>
    </div>
  );
}

export default App;
