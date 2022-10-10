import React, {useState, createContext} from "react";

const carCtext = createContext();

export default function CartContextProvider({children}){
    const [cart ,setCar] = useState([]);
    
// 1
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
    // 2
    function getTotalItemsInCart(){
       
        return cart.reduce((acc , x)=> acc += x.count,0)
    }
    // 3
    function isInCart(id){
        return cart.some(x => x.id === id)
    }
    // function emptyCart(){
    //     return setCar([]);
    // }    
    function priceFinal(){
        return cart.reduce((acc,x) => acc += x.price * x.count,0)
    }    

    const emptyCart =()=> { setCar([])}
 
    const deleteItem =(id)=> { return (       
        setCar (cart.filter(x => x.id !== id)
         ) )}

    // const deleteItem=(item)=> {
    //     if(isInCart(item)){
    //         setCar(cart.filter(x=>{
    //             return (x.id !== item.id)
    //         }))
    //     }
    // }     

    // const deleteItem= (item)=>{
    //     if(isInCart(item)){
    //     //     setCar(cart.filter(x=>{
    //     //    return (x.id !== item.id)
               
    //     //     }
    //     // ))
    //     setCar (cart.filter(x => x.id !== id))
    //     return x
    // }

//     function cartProducts(){
         
//         return (

//             <div>
//             {cart.map((cart, index) => {
//               return (
//                 <div key={index}>
//                   <h5> {cart.title}</h5>
//                   <img className='itemDetailImg ' src={cart.img} alt="card img"></img>
//                   <h5>Precio c/u : {cart.price }</h5>
//                   <button onClick={()=>deleteItem(cart.id) } > Eliminar producto</button>
//                   <h5>Cantidad de productos : {cart.count }</h5>
//                   <h5>total de este producto : {cart.price * cart.count}</h5>
                  
      
//                   <hr />
//                 </div>
//             );
//         })}
       
//       </div>
//     );
//   }

    return(
        <carCtext.Provider value={{cart, addItem,getTotalItemsInCart,isInCart ,priceFinal,emptyCart,deleteItem}}>{children}</carCtext.Provider>
    )
}


 export {carCtext}