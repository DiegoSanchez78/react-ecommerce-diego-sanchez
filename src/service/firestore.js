
import { initializeApp } from "firebase/app";
import {getFirestore , collection, getDocs,doc,getDoc,query,where,addDoc} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAF3mepZIuBXulCetwqnXjCBO0kp1LQE7Y",
  authDomain: "guitarhousereact.firebaseapp.com",
  projectId: "guitarhousereact",
  storageBucket: "guitarhousereact.appspot.com",
  messagingSenderId: "860192471896",
  appId: "1:860192471896:web:b051a5611388f53953c32d"
};

const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app);

export  async function getItems(){
  const collectionRef = collection(firestore, "guitar");
  let respuesta = await  getDocs(collectionRef);
  
  let dataDocs = respuesta.docs.map((documento) => {
    let docFermateo = {...documento.data(),id : documento.id};
    return docFermateo;
  }) 

return dataDocs
}

export async function getOneItem(itemidParams){
  const docRef = doc (firestore,"guitar",itemidParams)
  const docSnashot = await getDoc(docRef);

  return{...docSnashot.data(),id : docSnashot.id};
} 

export async function getByCaterory(catParams){
  const collectionRef = collection(firestore, "guitar")
  const queryCatergory = query(collectionRef, where("category", "==",catParams))
 
  const respuesta = await getDocs(queryCatergory);

  let dataDocs = respuesta.docs.map((documento) => {
    let docFermateo = {...documento.data(),id : documento.id};
    return docFermateo;
  })

return dataDocs
}

export async function createBuyOrder(orderData){
  const collectionRef = collection(firestore,"orders")
  let respuesta = await addDoc(collectionRef, orderData)
  return respuesta.id
}

export async function exportDataToFirebase(){
  const data =[ 
    {
      id:1,
          price:240,
          title:"Ibanez RG5120M Prestige Electric Guitar Polar Lights",
          img:"https://media.guitarcenter.com/is/image/MMGS7/L34998000002000-00-720x720.jpg",
          detail:"The RG5000s feature Stainless Steel frets for a bright tone, long durability and smoothness, a rigid 5-piece Maple/Wenge neck, a fretboard with beautiful wood grains, Made-in-Japan Luminlay side dots and the most cutting-edge pickups.This RG5120M features a Birdseye Maple fretboard and an Ash top/African Mahogany body. The Super Wizard HP neck enables extra-smooth playing. The Fishman Fluence Modern Humbuckers provide aggressive tone and powerful attack without noise. The Voicing switch allows the pickups to have a modern, active high-output sound or a crisp, clean and fluid sound.  The Lo-Pro Edge bridge offers maximum playing comfort due to its streamlined profile and recessed fine tuners. A hard-shell case is included.",
          stock:6,
          category:"ibanez",
   },
    {
        id:2,
        price:1350,
        title:"Ibanez RG Prestige Series RG652AHM Electric Guitar Nebula Green Burst",
        img:"https://media.guitarcenter.com/is/image/MMGS7/J22040000001000-00-720x720.jpg",
        detail:"As the crown jewel of Ibanez, the Prestige line represents the passion and pride of Japanese luthiery. These guitars, produced exclusively in Japan, have earned worldwide acclaim and respect throughout the industry for their craftsmanship, quality, and innovation. Combine this with the classic Ibanez RG design and you have an instrument that truly represents a cornerstone of the Ibanez legacy.The RG652AHM features an ash body for sparkling highs and beefy lows with a generous heaping of sustain. The ultra-fast, 5-piece maple/walnut, Super Wizard High Performance neck has a stunning birdseye maple fingerboard for a snappier sound.Electronics include a pair of DiMarzio Air Norton and The Tone Zone pickups for the perfect mix of power and tone, and a 5-way selector switch for maximum tonal versatility. The masterpiece Edge bridge offers exceptional tuning stability, precise intonation adjustment, and playing comfort. Hardshell case included.",
        stock:3,
        category:"ibanez",
   },
          {
        id:3,
        price:1599,
        title:"Ibanez AZ2204N AZ Prestige Series 6str Electric Guitar Black",
        img:"https://media.guitarcenter.com/is/image/MMGS7/L82347000002000-00-720x720.jpg",
        detail:"The AZ2204N AZ Prestige Series Electric Guitar from Ibanez takes adaptability to new extremes. Ready to handle everything from the warmest blues licks to the most intense, shred-heavy metal riffs, the AZ2204N AZ is ideal for guitarists of any skill level. A shallow body back contour and big forearm contour provide playing comfort whether seated or standing while a Super All Access Neck Joint increases playability and eases access to the highest frets. Featuring a roasted maple neck with oval C-shape, rosewood fingerboard for solid tone and an alder body, this 6-string electric delivers a well-balanced bright tone, enriched resonance and sustain. Seymour Duncan Fortuna Pickups feature a moderate output and natural, clean voicing with an overall tonal balance that is evenly adjusted and works well with various effect pedals. Additional features include a Gotoh Magnum Lock w ith H.A.P. machine heads, a Gotoh T1702B tremolo bridge and a dyna-MIX9 switching system that offers nine sound variations and can switch between humbucker and single coil modes with just a flick of the mini switch. A hardshell case is included for portable protection and convenient storage between gigs.",
        stock:2,
        category:"ibanez",
   },
          {   
        id:4,
        price:1450,
        title:"Ibanez S Prestige S6570Q 6 string Electric Guitar Natural Blue",
        img:"https://media.guitarcenter.com/is/image/MMGS7/J48369000002000-00-720x720.jpg",
        detail:"As the crown jewel of Ibanez, the Prestige line represents the passion and pride of Japanese luthiery. These guitars, produced exclusively in Japan, have earned worldwide acclaim and respect throughout the industry for their craftsmanship, quality, and innovation. Combine this with the legendary Ibanez S body style, and you have an instrument that defines the Ibanez mission of quality, innovation and design.The S6570Q features a handsomely contoured Mahogany body with a richly Quilted Maple cap and revered Super Wizard High Performance neck—constructed of five, glued, solid pieces of Maple/ Walnut—for absolute rock solid stability and fast, smooth, high-performance playing.Electronics include high-output DiMarzio Air Norton, True Velvet and The Tone Zone pickups that were chosen for the inspiring way they complement each other to create a wide pallet of tonal options that add fire and improve sustain, yet retain clarity. Wired through a 5-way selector switch, they can be combined in a variety of configurations that offer numerous tonal options.The Ibanez original Lo-Pro Edge tremolo bridge designed for superior tuning stability, playing comfort, and optimum sustain. Hard shell case included.",
        stock:5,
        category:"ibanez",
     },
          {
        id:5,
        price:2100,
        title:"Ibanez RG5320 RG Prestige 6str Electric Guitar Cosmic Shadow",
        img:"https://media.guitarcenter.com/is/image/MMGS7/L72118000001000-00-720x720.jpg",
        detail:"The Ibanez RG5320 RG Prestige has an African mahogany body with natural finish, and a Cosmic Shadow finish on the top. The rigid 5-piece Super Wizard HP neck is made of maple and wenge. It features a bound Macassar ebony fretboard with Mother of Pearl dot inlays. Luminlay side dots will light the way on dark stages. Frets are jumbo stainless steel for bright tone and durability; Ibanez gives them the Prestige fret edge treatment for extra smooth playing. Ibanez collaborated with DiMarzio to create the RG5320 RG’s Fusion Edge pickups, which combine clarity with a smooth response, satisfying the demands of players in today’s progressive metal scene. A coil-tap switch gives greater tonal options with a lower output sound.The Ibanez RG Prestige is further decked-out with Cosmo Black hardware, including a Lo-Pro Edge tremolo bridge. A hardshell case is included.",
        stock:5,
        category:"ibanez",
    },
     {
        id:6,
        price:2800,
        title:"Gibson Les Paul Standard '60s Electric Guitar Iced Tea",
        img:"https://media.guitarcenter.com/is/image/MMGS7/L54578000001000-00-720x720.jpg",
        detail:"This Gibson Les Paul Standard ’60s electric guitar replicates the historic models adopted by some of the most legendary players of all time. It features a solid mahogany body with an AA figured maple top, and its mahogany neck has a '60s-style SlimTaper profile.  Loaded with a calibrated pair of BurstBucker 61 pickups and hand-wired controls, this Les Paul Standard '60s electric guitar has a huge voice that's always ready to rock. Time-tested hardware includes an ABR-1 bridge, stopbar tailpiece and Grover Rotomatic tuners. This Les Paul Standard '60s comes with a hardshell case.",
        stock:5,
        category:"gibson",
    },
    {
        id:7,
        price:2590,
        title:"Gibson Les Paul Standard '50s Electric Guitar Heritage Cherry Sunburst",
        img:"https://media.guitarcenter.com/is/image/MMGS7/L54575000002000-00-720x720.jpg",
        detail:"Returning to the roots of a classic, this Les Paul Standard '50s oozes authenticity and serves as a reminder of Gibson's history of innovation. The traditional figured maple on mahogany construction and '50s neck profile bear a gorgeous nitro-lacquer finish for that legendary look. Looking back to the transition that took place in 1957, the guitar boasts calibrated Alnico II probucker pickups and hand-wired controls. A truly timeless electric that's as satisfying to play today as it was 6 decades ago, it's ready for your musical explorations.",
        stock:5,
        category:"gibson",
    },
    {
        id:8,
        price:2300,
        title:"Gibson Les Paul Studio Limited-Edition Electric Guitar Manhattan Midnight",
        img:"https://media.guitarcenter.com/is/image/MMGS7/L76588000001000-00-720x720.jpg",
        detail:"The stunning limited-edition finishes on these special-run Les Paul Studio make them truly standout instruments. Featuring a weight-relieved mahogany body and beautiful carved maple top, it’s easy to play all night long. Powerful Gibson humbuckers with versatile push/pull pots offer a huge variety of tones for easy cross-genre musical explorations. Includes deluxe softshell case.",
        stock:5,
        category:"gibson",
    },
    {
        id:9,
        price:2150,
        title:"Gibson Les Paul Deluxe '70s Electric Guitar Gold Top",
        img:"https://media.guitarcenter.com/is/image/MMGS7/L83996000002000-00-720x720.jpg",
        detail:"First released in 1969, the Gibson Les Paul Deluxe saw the introduction of the mini humbucker to the Les Paul lineup. Mini humbuckers retain the hum-free performance of their full-sized cousins but with a clearer and brighter tonality. This reimagined version has features inspired by those early models from the 1970s, with a mahogany body, bound maple top and bound mahogany neck. Additionally, the Les Paul Deluxe 70s includes vintage-style Keystone tuners, a GraphTech nut and a traditional Les Paul control layout with two Volume and two Tone controls wired with Orange Drop capacitors.",
        stock:5,
        category:"gibson",
    }
    ]

  const collectionRef = collection(firestore, "guitar")

    for(let item of data){
      const newDoc = addDoc(collectionRef, item)
      console.log("dco creado", newDoc.id)
    }

}


export default firestore;

