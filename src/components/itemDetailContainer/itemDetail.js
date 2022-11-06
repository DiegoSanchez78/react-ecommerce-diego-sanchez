
import React, { useState, useContext } from 'react';
import ItemCount from '../ItemCount/itemCount';
import './itemDetail.css';
import { Link } from 'react-router-dom';
import { carCtext } from '../../context/carContext';

function ItemDetail(props) {
  const{addItem} = useContext(carCtext)
  
  const [estadoCart,setEstadoCart] = useState(false)

  function handleAddToCart(count){
      addItem(props, count)
    setEstadoCart(true)
  }
    return (
      
      
      <div >
        <div className='itemDetailFlex '>
          <div className=' itemDetailFlex'>
            <img className='itemDetailImg ' src={props.img} alt="card img"></img>
          </div>
        <div className='itemDetailPaddig'></div>
          <div className='itemDetailPaddig'>
            <h5>{props.title}</h5>
            <h2>Price usd : {props.price}</h2>
           
          {estadoCart === false? <ItemCount stock={props.stock}  inicio={1} onAddToCard={handleAddToCart}/>
          : <Link to="/cart/">
        <button>Finalizar compra</button>
        </Link>}
        </div>
        </div>
           <div className='detailContainer'>
          <h3>Detail:</h3>
          <p>{props.detail}</p>
        </div>
      </div>
    );
    
  }
  export default ItemDetail;