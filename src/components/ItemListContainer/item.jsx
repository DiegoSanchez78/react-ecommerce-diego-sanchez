
import React from 'react';
import { Link } from 'react-router-dom';
// import ItemCount from '../ItemCount/itemCount';
import './cards.css';


function Item(props) {
  const urlDetail = `/guitar/${props.id}`; 
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
        <Link to={urlDetail}>
        <button>Ver mas</button>
        </Link>
        {/* <ItemCount stock={5} inicio={1}/> */}
       
      </div>
    );
  }
  export default Item;