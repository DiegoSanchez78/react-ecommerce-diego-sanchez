import React,{useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
// import Item from './Card';
import getItems, { getByCaterory } from '../../service/mockApi'
import ItemList from './itemList';

function ItemListContainer() {
      let  [data, setData] = useState([]);

      const {cat} = useParams();

      useEffect( ()=>{
        if(cat === undefined){
          getItems().then((respuestaDatos) =>
            setData(respuestaDatos));
        }
        else {
            getByCaterory(cat).then((respuestaDatos)=> setData(respuestaDatos))
        }    
      }, [cat] );
      

    return (
     <div>    
      <div className='CardFlex' >
        <ItemList data={data}/>

        </div>
      </div>
    );
  }
  export default ItemListContainer;