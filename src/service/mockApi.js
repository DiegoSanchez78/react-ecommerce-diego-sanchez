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
        detail:"Steve Vai is one of the revered few on that short list of players who have changed the way we all think about what a guitar can really do. His signature Ibanez guitars are no different: iconic, sublime, awe-inspiring and outrageous.        The Ibanez JEM/UV Series is a spectacular instrument that features a contoured basswood body and a 5-piece maple and walnut bolt-on neck that provides easy access to all registers. A 24-fret maple fingerboard is adorned with a colorful .Tree of Life pattern inlay and has the high-speed JEM Premium profile that gives Steve Vai the playability he needs. The JEM77P sports Cosmo Black hardware and includes Steve's Monkey Grip handle cut on the body. The JEM77P is loaded with a pair of DiMarzio Gravity Storm humbuckers and a DiMarzio Evolution single-coil in the middle position. This pickup combination with 5-way selector switch features a wide sound variety of great tones needed for modern rock. The acclaimed Edge Zero II tremolo features lower profiled design for playing comfort and locking studs contribute to tuning stability. Gig bag included.",
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
            },2000);
        })
    }


    export function getOneItem(){
        return new Promise((resolve,reject)=> {
            setTimeout(()=>{
                resolve(data[1]);
            },2000);
        })
    }