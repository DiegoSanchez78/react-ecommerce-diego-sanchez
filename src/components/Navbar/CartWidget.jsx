import React from 'react';

import MiCart from './icon-cart.png';
import { carCtext } from '../../context/carContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import './navBar.css';



function CartWidget() {
  const {getTotalItemsInCart} = useContext(carCtext)
    
    return (
      <div>
        <Link  to="/cart/" className='cartFlex'>
         <img src={MiCart} alt="foto" />
         <span>x </span>
         <span>{getTotalItemsInCart()}</span>
         </Link>
      </div>
    );
  }
  export default CartWidget;