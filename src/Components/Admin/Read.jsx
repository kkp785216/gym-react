import React from 'react'
import { collection, getDocs } from 'firebase/firestore/lite';
import { query, where, orderBy, limit } from "firebase/firestore"; 
import {db} from '../../Database/FireStore'

const Read = () => {

  async function getCities(db) {
    const citiesCol = collection(db, 'Posts');
    const q = query(citiesCol, where("category_id", "==", "weight_loss"), orderBy("date", "desc"), limit(5));
    const citySnapshot = await getDocs(q);
    const cityList = citySnapshot.docs.map(doc => doc.data());
    console.log(cityList);
  }

  const handleClick = () => {
    getCities(db)
  }

  return (
    <div>
      <button onClick={handleClick}>Read File</button>
    </div>
  )
}

export default Read