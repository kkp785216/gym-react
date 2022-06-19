import React from 'react'
import { collection, addDoc } from "firebase/firestore";
import { db } from '../../Database/FireStore'

const Write = () => {

  let data = {
    "date": new Date().getTime(),
    "categories": [
      // "featured",
      "muscle_building",
      "fitness"
    ],
    // "image": "https://firebasestorage.googleapis.com/v0/b/fitness-gym-65c3e.appspot.com/o/yoga%2Fsmall%2F1.jpg?alt=media",
    // "big_img": "https://firebasestorage.googleapis.com/v0/b/fitness-gym-65c3e.appspot.com/o/yoga%2Fbig%2F1.jpg?alt=media",

    // "image": "https://firebasestorage.googleapis.com/v0/b/fitness-gym-65c3e.appspot.com/o/lifestyle%2Fsmall%2F1.jpg?alt=media",
    // "big_img": "https://firebasestorage.googleapis.com/v0/b/fitness-gym-65c3e.appspot.com/o/lifestyle%2Fbig%2F1.jpg?alt=media",

    "image": "https://firebasestorage.googleapis.com/v0/b/fitness-gym-65c3e.appspot.com/o/muscle_building%2Fsmall%2F1.jpg?alt=media",
    "big_img": "https://firebasestorage.googleapis.com/v0/b/fitness-gym-65c3e.appspot.com/o/muscle_building%2Fbig%2F1.jpg?alt=media",

    // "image": "https://firebasestorage.googleapis.com/v0/b/fitness-gym-65c3e.appspot.com/o/weight_loss%2Fsmall%2F1.jpg?alt=media",
    // "big_img": "https://firebasestorage.googleapis.com/v0/b/fitness-gym-65c3e.appspot.com/o/weight_loss%2Fbig%2F1.jpg?alt=media",
    
    // "image": "https://firebasestorage.googleapis.com/v0/b/fitness-gym-65c3e.appspot.com/o/workout%2Fsmall%2F1.jpg?alt=media",
    // "big_img": "https://firebasestorage.googleapis.com/v0/b/fitness-gym-65c3e.appspot.com/o/workout%2Fbig%2F1.jpg?alt=media",

    "category_id": "muscle_building",
    "title": "How to Build Your Muscle Fast Following The Best Specific Strategy",
    "tags": [
      "fitness",
      "news"
    ],
    "author": "krishna",
    "url": "how-to-build-your-muscle-fast-following-the-best-specific-strategy"
  }
  // console.log(data)

  async function post() {
    try {
      const docRef = await addDoc(collection(db, "Posts"), data);
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  const handleWrite = () => {
    post();
  }

  return (
    <div>
      <button >Write File</button>
    </div>
  )
}

export default Write