import React, { useState, useEffect } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { HiChevronDown } from 'react-icons/hi'
import MegaMenu from '../MegaMenu/MegaMenu'
import { collection, getDocs } from 'firebase/firestore/lite';
import { query, where, orderBy, limit } from "firebase/firestore";
import { db } from '../../Database/FireStore'

const Navbar = () => {
  const [category, setCategory] = useState({});
  const [workout, setWorkout] = useState({});
  const [muscle_building, setMuscle_building] = useState({});
  const [weight_loss, setWeight_loss] = useState({});
  const [yoga, setYoga] = useState({});
  const [lifestyle, setLifestyle] = useState({});
  const [fitness, setFitness] = useState({});

  async function getPosts(db, lmt, coll, category) {
    const citiesCol = collection(db, coll);
    const q = query(citiesCol, where("category_id", "==", category), orderBy("date", "desc"), limit(lmt));
    const citySnapshot = await getDocs(q);
    const cityList = citySnapshot.docs.map(doc => doc.data());
    return cityList;
  }

  async function getAllPosts(db, lmt, coll) {
    const citiesCol = collection(db, coll);
    const q = query(citiesCol, where("categories", "array-contains-any", ["fitness"]), orderBy("date", "desc"), limit(lmt));
    const citySnapshot = await getDocs(q);
    const cityList = citySnapshot.docs.map(doc => doc.data());
    return cityList;
  }

  async function getCategory(db, coll) {
    const citiesCol = collection(db, coll);
    const q = query(citiesCol);
    const citySnapshot = await getDocs(q);
    const cityList = citySnapshot.docs.map(doc => doc.data());
    return cityList;
  }

  const dt = (date) => {
    let d = new Date(date);
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'Sepetember', 'October', 'November', 'December'];
    return months[d.getMonth()] + ' ' + d.getDate() + ', ' + d.getFullYear()
  }

  useEffect(() => {
    getCategory(db, 'Categories')
      .then((catres) => {
        setCategory(catres);
        let catObj = {};
        catres.forEach((element) => { catObj[element.id] = element });
        setCategory(catObj);

        getPosts(db, 5, 'Posts', "workout")
          .then((response) => {
            let postsObj = {}
            postsObj.title = catObj.workout.name
            postsObj.url = catObj.workout.url
            postsObj.data = response
            setWorkout(postsObj);
          });

        getPosts(db, 5, 'Posts', 'muscle_building')
          .then((response) => {
            let postsObj = {}
            postsObj.title = catObj.muscle_building.name
            postsObj.url = catObj.muscle_building.url
            postsObj.data = response
            setMuscle_building(postsObj);
          });

        getPosts(db, 5, 'Posts', "weight_loss")
          .then((response) => {
            let postsObj = {}
            postsObj.title = catObj.weight_loss.name
            postsObj.url = catObj.weight_loss.url
            postsObj.data = response
            setWeight_loss(postsObj);
          });

        getPosts(db, 5, 'Posts', "yoga")
          .then((response) => {
            let postsObj = {}
            postsObj.title = catObj.yoga.name
            postsObj.url = catObj.yoga.url
            postsObj.data = response
            setYoga(postsObj);
          });

        getPosts(db, 5, 'Posts', "lifestyle")
          .then((response) => {
            let postsObj = {}
            postsObj.title = catObj.lifestyle.name
            postsObj.url = catObj.lifestyle.url
            postsObj.data = response
            setLifestyle(postsObj);
          });

        getAllPosts(db, 5, 'Posts')
          .then((response) => {
            let postsObj = {}
            postsObj.title = catObj.fitness.name
            postsObj.url = catObj.fitness.url
            postsObj.data = response
            setFitness(postsObj);
          });

      });
  }, []);

  return (
    <nav className='on'>
      <ul className='p-0 m-0'>
        <li><Link to="/hello" className='default-hover'>HOME</Link></li>
        {weight_loss.data && weight_loss.data.length >= 1 &&
          workout.data && workout.data.length >= 1 &&
          fitness.data && fitness.data.length >= 1 &&
          muscle_building.data && muscle_building.data.length >= 1 &&
          <li><Link to={"/fitness"} className='default-hover'>FITNESS <HiChevronDown /></Link><MegaMenu menu={'Fitness'} data={null} multiData={[muscle_building, weight_loss, workout, fitness]} category={category}  /></li>
        }
        {weight_loss.data && weight_loss.data.length >= 1 && <li><Link to={"/weight-loss"} className='default-hover'>WEIGHT LOSS <HiChevronDown /></Link><MegaMenu data={weight_loss} category={category} /></li>}
        {workout.data && workout.data.length >= 1 && <li><Link to={"/workout"} className='default-hover'>WORKOUT <HiChevronDown /></Link><MegaMenu data={workout} category={category} /></li>}
        {yoga.data && yoga.data.length >= 1 && <li><Link to={"/yoga"} className='default-hover'>YOGA <HiChevronDown /></Link><MegaMenu data={yoga} category={category} /></li>}
        {lifestyle.data && lifestyle.data.length >= 1 && <li><Link to={"/lifestyle"} className='default-hover'>LIFESTYLE <HiChevronDown /></Link><MegaMenu data={lifestyle} category={category} /></li>}
      </ul>
    </nav>
  )
}

export default Navbar