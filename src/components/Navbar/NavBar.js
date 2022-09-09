
import logo1 from './logo.JPG';
import './navBar.css';

function NavBar() {
    return (
      <div >
        <header className="NavBar">
          <img src={logo1} className="Nav-logo" alt="logo" />
          <ul className="NavBar" >
            <li className="NavMargin">
              <a className="NavText" href="/about">Inicio</a>
            </li>
            <li className="NavMargin">
              <a className="NavText" href="/about">Nosotros</a>
            </li>
            <li className="NavMargin">
              <a className="NavText" href="/about">Productos</a>
             </li>
            <li className="NavMargin">
              <a className="NavText" href="/about">Contacto</a>
           </li>
          </ul>
         
        
          
        </header>
      </div>
    );
  }
  export default NavBar;