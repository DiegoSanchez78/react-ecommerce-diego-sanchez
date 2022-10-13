import React,{useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
// import Item from './Card';
import {getItems, getByCaterory} from '../../service/firestore'
import ItemList from './itemList';

function ItemListContainer() {
      const  [data, setData] = useState([]);
      const [isLoading,setIsLoading] = useState(true)
      console.log()

      const {cat} = useParams();

      useEffect( ()=>{
        // setData([])
        setIsLoading(true)
        if(cat === undefined){
          console.log(getItems())
          getItems().then((respuestaDatos) =>
            console.log("->",respuestaDatos))
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