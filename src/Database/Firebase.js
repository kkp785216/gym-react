// import React from 'react'
// import { initializeApp } from "firebase/app";
// import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// import { query, orderBy } from "firebase/firestore";  

// const Firebase = () => {
//     const firebaseConfig = {
//         apiKey: "AIzaSyCF0j9PZFrDaanwxuAc4PuCDbs8o8eE868",
//         authDomain: "fitness-gym-65c3e.firebaseapp.com",
//         projectId: "fitness-gym-65c3e",
//         storageBucket: "fitness-gym-65c3e.appspot.com",
//         messagingSenderId: "514006794412",
//         appId: "1:514006794412:web:9b5eddd8cc249127d55f09"
//     };
    
//     const app = initializeApp(firebaseConfig);
//     const db = getFirestore(app);
    
//     // Get a list of cities from your database
//     async function getCities(db) {
//         const citiesCol = collection(db, 'Categories');
//         const q = query(citiesCol, orderBy("date", "asc"));
//         const citySnapshot = await getDocs(q);
//         const cityList = citySnapshot.docs.map(doc => doc.data());
//         return cityList;
//     }

//     console.log(getCities(db))
//   return (
//     <div>Firebase</div>
//   )
// }

// export default Firebase