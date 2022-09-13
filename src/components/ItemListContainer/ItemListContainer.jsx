import React from 'react';
import Card from './Card';



function ItemListContainer() {
  let greeting = "Nuestros productos"
    return (
     <div>
      <h2 className='CardFlex'>{greeting}</h2>
    
      <div className='CardFlex' >
        <Card 
            price={240}
            title="Ibanez Kiko Loureiro Signature KIKO10BP Electric Guitar Transparent Gray Burst"
            img="https://media.guitarcenter.com/is/image/MMGS7/J86221000001000-00-720x720.jpg"
        />
         <Card 
            price={1350}
            title="Ibanez RG450DX Electric Guitar White"
            img="https://media.guitarcenter.com/is/image/MMGS7/H91446000001000-00-720x720.jpg"
        />
         <Card 
            price={1599}
            title="Ibanez JEM77P Steve Vai Signature JEM Premium Series Electric Guitar Blue Floral Pattern"
            img="https://media.guitarcenter.com/is/image/MMGS7/L74822000001000-00-720x720.jpg"
        />
         <Card 
            price={1599}
            title="Ibanez JEM77P Steve Vai Signature JEM Premium Series Electric Guitar Blue Floral Pattern"
            img="https://media.guitarcenter.com/is/image/MMGS7/L74822000001000-00-720x720.jpg"
        />
         <Card 
            price={1599}
            title="Ibanez JEM77P Steve Vai Signature JEM Premium Series Electric Guitar Blue Floral Pattern"
            img="https://media.guitarcenter.com/is/image/MMGS7/L74822000001000-00-720x720.jpg"
        />
         <Card 
            price={1599}
            title="Ibanez JEM77P Steve Vai Signature JEM Premium Series Electric Guitar Blue Floral Pattern"
            img="https://media.guitarcenter.com/is/image/MMGS7/L74822000001000-00-720x720.jpg"
        />
      </div>
      </div>
    );
  }
  export default ItemListContainer;