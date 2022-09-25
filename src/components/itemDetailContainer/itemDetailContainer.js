import React, { useEffect, useState } from 'react';
import { getOneItem } from '../../service/mockApi';
import ItemDetail from './itemDetail';

function ItemDetailContainer() {
    let [data, setData] = useState({});

    useEffect( ()=>{
    getOneItem().then( (respuestaDatos)=> setData(respuestaDatos))
    },[]);

    return (
        <div>
          <ItemDetail   
          key={data.id}
          price={data.price}
          title={data.title}
          img={data.img}
          detail={data.detail}
          category={data.category}/>
        </div>
    );
    
}

export default ItemDetailContainer;