import React from "react";
import Item from './item';


function ItemList(props) {
  return (
   <div>    
    <div className='CardFlex' >
      {props.data.map((item) => {
        return <Item  
          key={item.id}
          price={item.price}
          title={item.title}
          img={item.img}
          category={item.category}
        />
   
    })}

      </div>
    </div>
  );
}
export default ItemList;