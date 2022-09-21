import React,{useState, useEffect} from 'react';
// import Item from './Card';
import getItems from '../../service/mockApi'
import ItemList from './itemList';

function ItemListContainer() {
      let  [data, setData] = useState([]);

      useEffect( ()=>{
          getItems().then((respuestaDatos) => {
            setData(respuestaDatos)
            console.log(respuestaDatos)
            });
        }, []
      );

    return (
     <div>    
      <div className='CardFlex' >
        <ItemList data={data}/>

        </div>
      </div>
    );
  }
  export default ItemListContainer;