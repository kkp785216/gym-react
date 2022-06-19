import { useState, useEffect } from 'react'
import MainiLayout from '../Layouts/MainLayout/MainLayout'
import Header from '../Header/Header'
import Slider from '../Slider/Slider'
import ColumnLayout from '../Layouts/MainLayout/ColumnLayout'
import Heading from '../Layouts/Heading/Heading'
import { Link } from 'react-router-dom'
import './Home.css'
import Home2 from './Home2/Home2'
import SocialConnect from '../Layouts/SocialConnect/SocialConnect'
import FacebookFeed from '../Layouts/FacebookFeed/FacebookFeed'
import PostLayout1 from '../Layouts/PostsLayouts/PostLayout1/PostLayout1'
import PostLayout2 from '../Layouts/PostsLayouts/PostLayout2/PostLayout2'
import BlogPostRow from '../Layouts/BlogPostLayout/BlogPostRow'
import BlogPostColumn from '../Layouts/BlogPostLayout/BlogPostColumn'
import PostLayout3 from '../Layouts/PostsLayouts/PostLayout3/PostLayout3'
import Pagination from './Pagination/Pagination'
import { useNavigate, useParams } from "react-router-dom";
import { collection, getDocs } from 'firebase/firestore/lite';
import { query, where, orderBy, limit } from "firebase/firestore";
import { db } from '../../Database/FireStore'

const Home = (props) => {

  const [category, setCategory] = useState({});
  const [workout, setWorkout] = useState({});
  const [muscle_building, setMuscle_building] = useState({});
  const [weight_loss, setWeight_loss] = useState({});
  const [allPost, setAllPost] = useState([]);

  async function getPosts(db, lmt, coll) {
    const citiesCol = collection(db, coll);
    const q = query(citiesCol, where("category_id", "==", "weight_loss"), orderBy("date", "desc"), limit(lmt));
    const citySnapshot = await getDocs(q);
    const cityList = citySnapshot.docs.map(doc => doc.data());
    return cityList;
  }

  async function getAllPosts(db, coll) {
    const citiesCol = collection(db, coll);
    const q = query(citiesCol, orderBy("date", "desc"));
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

        getPosts(db, 9, 'Posts')
          .then((response) => {
            let postsObj = {}
            postsObj.title = catObj.workout.name
            postsObj.url = catObj.workout.url
            postsObj.data = response
            setWorkout(postsObj);
          });

        getPosts(db, 6, 'Posts')
          .then((response) => {
            let postsObj = {}
            postsObj.title = catObj.muscle_building.name
            postsObj.url = catObj.muscle_building.url
            postsObj.data = response
            setMuscle_building(postsObj);
          });

        getPosts(db, 8, 'Posts')
          .then((response) => {
            let postsObj = {}
            postsObj.title = catObj.weight_loss.name
            postsObj.url = catObj.weight_loss.url
            postsObj.data = response
            setWeight_loss(postsObj);
          });

        getAllPosts(db, 'Posts')
          .then((response) => {
            setAllPost(response);
          });
      });
  }, []);
  
  let navigate = useNavigate();
  let { page } = useParams();
  (window.location.pathname === props.basename.replace(/\//g , '').replace(/^/, '/').replace(/$/, '/') || props.basename.replace(/\//g , '').replace(/^/, '/') || '/') && (page = 1);

  // define pagination rules
  let perPagePost = 12;
  let totalPage = Math.ceil(allPost.length / perPagePost);

  const handlePageClick = ({ selected }) => {
    if (selected + 1 >= 1 && selected + 1 <= totalPage) {
      navigate(`/page/${selected + 1}`);
    }
  }

  return (
    <>
      <Header />

      <Slider />

      <MainiLayout className="hello">

        <ColumnLayout>
          <div>
            <Heading color="secondary">
              Facebook Feed
            </Heading>
            <FacebookFeed />
          </div>
        </ColumnLayout>

        <ColumnLayout className="middle">

          {/* Home - 1 */}
          {workout.data && workout.data.length >= 1 &&
            <div>
              <Heading color="primary">
                {workout.title}
              </Heading>
              <div className="row home1">
                {workout.data.slice(0, 9).map((element, index) => {
                  return (
                    <div className="col col-4" key={index}>
                      <Link to={"/"+element.url}><img src={element.image} alt="" /></Link>
                      <h3><Link to={"/"+element.url}>{element.title}</Link></h3>
                      <span>{dt(element.date)}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          }

          {/* Home - 2 */}
          <div>
            <Heading color="primary">
              {muscle_building.title}
            </Heading>
            {muscle_building.data && muscle_building.data.length >= 1 && <Home2 data={muscle_building.data.slice(0, 6)} />}
          </div>

          {/* Home - 3 */}
          {weight_loss.data && weight_loss.data.length >= 1 &&
            <div>
              <Heading color="primary">
                {weight_loss.title}
              </Heading>
              <PostLayout1 data={weight_loss.data.slice(0, 8)} className="home3" date={false} />
            </div>
          }

        </ColumnLayout>

        <ColumnLayout>
          <div>
            <Heading color="secondary">
              Social Contact
            </Heading>
            <SocialConnect />
          </div>

          {weight_loss.data && weight_loss.data.length >= 1 &&
            <div>
              <Heading color="secondary">
                Recent Post
              </Heading>
              <PostLayout2 data={weight_loss.data.slice(0, 8)} date={true} hr={true} />
            </div>}
        </ColumnLayout>

      </MainiLayout>


      {allPost && allPost.length >=1 &&
      <div className='blog-post-wrapper'>
        <Heading color="secondary">
          Latest Update
        </Heading>
        <BlogPostRow>
          {allPost.slice(perPagePost * (page - 1), (perPagePost * page)).map((element, index) => {
            return (
              <BlogPostColumn key={index}>
                <PostLayout3 data={element} category={category} dt={dt}/>
              </BlogPostColumn>
            )
          })}
        </BlogPostRow>
        <Pagination pageCount={totalPage} handlePageClick={handlePageClick} page={page} />
      </div>}
    </>
  )
}

export default Home