
import React from 'react';
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
      </div>
    );
  }
  export default Card;