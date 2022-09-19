
import React from 'react';
import ItemCount from '../ItemCount/itemCount';
import './cards.css';


function Card(props) {
    return (
      
      <div className='CardWidth CardEffect' >
        <div>
            <img className='CardImg' src={props.img} alt="card img"></img>
        </div>
        <div>
            <h5>{props.title}</h5>
            {/* <p>Precio</p> */}
            <h2>usd {props.price}</h2>
        </div>
        <button>Agregar a carrito</button>
        <ItemCount stock={5} inicio={1}/>
       
      </div>
    );
  }
  export default Card;