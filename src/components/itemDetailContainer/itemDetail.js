
import React from 'react';
import ItemCount from '../ItemCount/itemCount';
import './itemDetail.css';


function ItemDetail(props) {
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
            <button >Buy</button>
            
        <ItemCount stock={5} inicio={1}/>
        <button>Add to card</button>
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