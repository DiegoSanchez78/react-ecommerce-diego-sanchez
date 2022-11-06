import React, {useState, createContext} from "react";

const carCtext = createContext();

export default function CartContextProvider({children}){
    const [cart ,setCar] = useState([]);
    
    function addItem(item , count){
        if(isInCart(item.id)){

            let newCart =cart.map((itemMap) => {
                if (itemMap.id === item.id) {
                   itemMap.count += count
                   return itemMap; 
                }
                else
                    return itemMap
              });
              setCar(newCart)
    }
        else{
            let newCart =cart.map((item) => item);
            newCart.push({...item, count:count})
            console.log("hola context" , item , count)
            setCar(newCart);
            }
    }

    function getTotalItemsInCart(){   
        return cart.reduce((acc , x)=> acc += x.count,0)
    }
    function isInCart(id){
        return cart.some(x => x.id === id)
    }
   
    function priceFinal(){
        return cart.reduce((acc,x) => acc += x.price * x.count,0)
    }    

    const emptyCart =()=> { setCar([])}
 
    const deleteItem =(id)=> { return (       
        setCar (cart.filter(x => x.id !== id)
         ) )}

    return(
        <carCtext.Provider value={{cart, addItem,getTotalItemsInCart,isInCart ,priceFinal,emptyCart,deleteItem}}>{children}</carCtext.Provider>
    )
}


 export {carCtext}