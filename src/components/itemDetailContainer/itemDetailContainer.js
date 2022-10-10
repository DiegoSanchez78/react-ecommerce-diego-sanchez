import React, { useEffect, useState } from 'react';
import { getOneItem } from '../../service/mockApi';

import {useParams} from 'react-router-dom'
import ItemDetail from './itemDetail';

function ItemDetailContainer() {
    let [data, setData] = useState({});
    const[error,setError] = useState(false)

    const {itemid}= useParams();

    useEffect( ()=>{
    getOneItem(itemid)
    .then( (respuestaDatos)=> setData(respuestaDatos))
    .catch((errorCarga) => { 
      setError(errorCarga.message)})
   
    },[itemid]);

    if (!data.title){
      
      return ( <>
       
        {error ?
        <div>
          <h2 style={{color : "#red"}}>Error de carga</h2>
          <p>{error}</p>
        </div>
        
      :(<h1>Cargando...</h1>)
    
        }
      </>
      )
    }

    return (
        <div>
          <ItemDetail   
          key={data.id}
          id={data.id}
          price={data.price}
          title={data.title}
          img={data.img}
          detail={data.detail}
          stock={data.stock}
          category={data.category}/>
        </div>
    );
    
}

export default ItemDetailContainer;