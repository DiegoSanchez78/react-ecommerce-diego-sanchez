
import React, { useState, useContext } from 'react';
import ItemCount from '../ItemCount/itemCount';
import './itemDetail.css';
import { Link } from 'react-router-dom';
import { carCtext } from '../../context/carContext';

function ItemDetail(props) {
  const{addItem} = useContext(carCtext)
  
  const [estadoCart,setEstadoCart] = useState(false)

  function handleAddToCart(count){
    // <h2>`agregaste carrito ${count}`</h2>
      addItem(props, count)
    // ver si va este estado
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
            {/* <p>Precio</p> */}
            <h2>Price usd : {props.price}</h2>
            {/* <button >Buy</button> */}
            {/* <h2>agregaste carrito ${props.count}</h2> */}
            
        {estadoCart === false? <ItemCount stock={props.stock}  inicio={1} onAddToCard={handleAddToCart}/>
        : <Link to="/cart/">
        <button>Finalizar compra</button>
        </Link>}
        {/* <button>Add to card</button> */}
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