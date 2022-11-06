
import CartWidget from './CartWidget';
import logo1 from './logo.JPG';
import './navBar.css';
import { Link } from 'react-router-dom';


function NavBar() {
    return (
      <div >
        <header className="NavBar">
          <Link to="/">
          <img src={logo1} className="Nav-logo" alt="logo" />
           </Link>
          <ul className="NavBar  NavPadding" >
            <li className="NavMargin">
              <Link className="NavText" to="/">"Inicio"</Link>
            </li>
            <li className="NavMargin">
              <Link className="NavText" to="/categoria/ibanez">Ibanez</Link>
             </li>
             <li className="NavMargin">
              <Link className="NavText" to="/categoria/gibson">Gibson</Link>
             </li>
          </ul>
         <CartWidget/>
        
          
        </header>
      </div>
    );
  }
  export default NavBar;