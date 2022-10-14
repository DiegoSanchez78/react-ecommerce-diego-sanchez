// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore , collection, getDocs,doc,getDoc,query,where} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAF3mepZIuBXulCetwqnXjCBO0kp1LQE7Y",
  authDomain: "guitarhousereact.firebaseapp.com",
  projectId: "guitarhousereact",
  storageBucket: "guitarhousereact.appspot.com",
  messagingSenderId: "860192471896",
  appId: "1:860192471896:web:b051a5611388f53953c32d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app);

export  async function getItems(){
  console.log("111111")
  const collectionRef = collection(firestore, "guitar");
  let respuesta = await  getDocs(collectionRef);
  console.log( respuesta)
  
  let dataDocs = respuesta.docs.map((documento) => {
    let docFermateo = {...documento.data(),id : documento.id};
    return docFermateo;
  }) 
console.log(dataDocs)
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


export default firestore;
// export {app}
