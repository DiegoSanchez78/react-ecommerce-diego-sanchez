const data =[ 
    {
      id:1,
          price:240,
          title:"Ibanez Kiko Loureiro Signature KIKO10BP Electric Guitar Transparent Gray Burst",
          img:"https://media.guitarcenter.com/is/image/MMGS7/J86221000001000-00-720x720.jpg",
          stock:6,
          category:"guitarras",
   },
    {
        id:2,
        price:1350,
        title:"Ibanez RG450DX Electric Guitar White",
        img:"https://media.guitarcenter.com/is/image/MMGS7/H91446000001000-00-720x720.jpg",
        stock:3,
        category:"guitarras",
   },
          {
               id:3,
        price:1599,
        title:"Ibanez JEM77P Steve Vai Signature JEM Premium Series Electric Guitar Blue Floral Pattern",
        img:"https://media.guitarcenter.com/is/image/MMGS7/L74822000001000-00-720x720.jpg",
        stock:2,
        category:"guitarras",
   },
          {   
        id:4,
        price:1599,
        title:"Ibanez JEM77P Steve Vai Signature JEM Premium Series Electric Guitar Blue Floral Pattern",
        img:"https://media.guitarcenter.com/is/image/MMGS7/L74822000001000-00-720x720.jpg",
        stock:5,
        category:"guitarras",
     },
          {
        id:5,
        price:1599,
        title:"Ibanez JEM77P Steve Vai Signature JEM Premium Series Electric Guitar Blue Floral Pattern",
        img:"https://media.guitarcenter.com/is/image/MMGS7/L74822000001000-00-720x720.jpg",
        stock:5,
        category:"guitarras",
    },
     {
        id:6,
        price:1599,
        title:"Ibanez JEM77P Steve Vai Signature JEM Premium Series Electric Guitar Blue Floral Pattern",
        img:"https://media.guitarcenter.com/is/image/MMGS7/L74822000001000-00-720x720.jpg",
        stock:5,
        category:"guitarras",
    }
    ]

    export default function getItems(){
        return new Promise((resolve,reject)=> {
            setTimeout(()=>{
                resolve(data);
                console.log("2 seg")
            },2000);
        })
    }