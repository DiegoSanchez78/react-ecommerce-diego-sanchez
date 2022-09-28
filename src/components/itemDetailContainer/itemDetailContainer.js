import React, { useEffect, useState } from 'react';
import { getOneItem } from '../../service/mockApi';
import ItemDetail from './itemDetail';
import {useParams} from 'react-router-dom'

function ItemDetailContainer() {
    let [data, setData] = useState({});

    const {itemid}= useParams();

    useEffect( ()=>{
    getOneItem(itemid).then( (respuestaDatos)=> setData(respuestaDatos))
    },[itemid]);

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