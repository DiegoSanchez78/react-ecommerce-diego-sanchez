import React,{useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import {getItems, getByCaterory} from '../../service/firestore'
import ItemList from './itemList';

function ItemListContainer() {
      const  [data, setData] = useState([]);
      const [isLoading,setIsLoading] = useState(true)
      const {cat} = useParams();

      useEffect( ()=>{
        setIsLoading(true)
         if(cat === undefined){
          getItems().then((respuestaDatos) =>
            setData(respuestaDatos))
            .finally(()=> setIsLoading(false))
        }
        else {
            getByCaterory(cat)
            .then((respuestaDatos)=> setData(respuestaDatos))
            .finally(()=> setIsLoading(false))
        }    
      }, [cat] );
      

    return (
     <div> 
        {isLoading && <h1>Cargando...</h1>}   
      <div className='CardFlex' >
        <ItemList data={data}/>
        </div>
      </div>
    );
  }
  export default ItemListContainer;